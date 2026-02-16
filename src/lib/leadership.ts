import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
  createdAt: string;
};

export type LeadershipMemberInput = Omit<LeadershipMember, "id" | "createdAt">;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const leadershipFile = path.join(process.cwd(), "data", "leadership.json");

const seedLeadership: LeadershipMember[] = [
  {
    id: "seed-ahmed-ali",
    name: "Ahmed Ali",
    role: "Executive Director",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD98ag23cB9YgdwI7xL4JZ1u5uar0kKcDYz7PXM-S6ZqHxDePRe2SO01lT6-X0j0H-aurkvmY0dwoim-CFJX7Nh4fWvpeK8oZJB-eGk6HQ8t0pC_Bam8_GyhZ-YBVsOZACuljX3cVpEQGbslniAjm8YUA90P3WvNsknXrgYWm44pB5nIi4r4MgYC1KoehqIeAKiNmUnfyZ3Sfyr5CYTuSWL2SdhdQ_XNo7PrdtQKvnF3QJd0OZ7mqXT6BVWMWjfddq6Wg0RQ78PkppA",
    altText:
      "Portrait of Ahmed Ali, Executive Director, wearing a suit and smiling",
    sortOrder: 1,
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-fatima-nur",
    name: "Fatima Nur",
    role: "Program Manager",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBahSuE31qMWMt84gvlD98_tT13PI9EY4bEgH2DKODN-FZwlMMVW3dXDum2mCAKoUeJAY7a8evs_4vWfYyvXJteJy31dcWkCIyMCbTJWYGqklUEGttXBScdgxDX0YoXjoInn2tcLmwvGTgKlYKCC6kR7Hq8sZhRFNrN4ugy0Buc9ni6jtT15niRKm7TYcjrPBcQywzv8DbtxgBYGbJtbxLNX0K6UV8e0K6SC9-3NHVw7FNYTzSPdb0G44MxE7zsZcveGi5_-uskyLO",
    altText:
      "Portrait of Fatima Nur, Program Manager, wearing a hijab and business attire",
    sortOrder: 2,
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-hassan-gedi",
    name: "Hassan Gedi",
    role: "Community Outreach",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpr8IuFrQx6o2LIE_KbK6vDG4UuhstOKb0_FVFtdjPaRWllEiUPKPQTQFBHVyDwrEp_jZos3SJyfLNg7n4HVPh4ofivH6bGKDQsWoZlxXmNVrMLqq8XTg0oGGqik50RsGz_ogVpn_zwI4E2MnnJH81yHt93vJRvoZlbEJCIWzdwGTww7nMfoAWSR7IX5JaV1-l2DYdpbgVztnoNbkJ-u7yYe1a2_bWutvXnWOShY60ovrLyYlxdMXVyoSk9E4JXzyeM2Iu4Tei_E0u",
    altText: "Portrait of Hassan Gedi, Community Outreach, smiling warmly",
    sortOrder: 3,
    createdAt: "2023-10-01T08:00:00.000Z",
  },
  {
    id: "seed-safia-abdi",
    name: "Safia Abdi",
    role: "Finance Officer",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxxEiu38E_sklLJIFeQIh58TfSHbuQPUT7EEZllqvXAGB0hUWrUr_xgcbICvDXWbeT9I4HuIdNcAIdkumIU-PY-215gTIcf_G5PFL9V6P8x-xOP87PYdwCVja3HRkaJMRgu6QCcA1zOEqzIi9BXz7ZUXST91MKcU0inIe8Z-nn0Se-G0IDkGlr7kvMecStQyRr7H-l3s2HDpDB9_O3EA0ZIml7wdXUMBp6R6EsJZmr8GaIVykY0CMr8txsPPL1c9GPV2jGDGCRJNuq",
    altText: "Portrait of Safia Abdi, Finance Officer, in professional attire",
    sortOrder: 4,
    createdAt: "2023-10-01T08:00:00.000Z",
  },
];

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
}

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseKey);
}

async function writeLocalLeadership(leadership: LeadershipMember[]) {
  await fs.mkdir(path.dirname(leadershipFile), { recursive: true });
  await fs.writeFile(leadershipFile, JSON.stringify(leadership, null, 2));
}

async function readLocalLeadership() {
  try {
    const data = await fs.readFile(leadershipFile, "utf-8");
    return JSON.parse(data) as LeadershipMember[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await writeLocalLeadership(seedLeadership);
      return seedLeadership;
    }
    throw error;
  }
}

function normalizeSupabaseRow(row: Record<string, unknown>): LeadershipMember {
  return {
    id: String(row.id ?? randomUUID()),
    name: String(row.name ?? ""),
    role: String(row.role ?? ""),
    imageUrl: String(row.image_url ?? ""),
    altText: String(row.alt_text ?? ""),
    sortOrder: Number(row.sort_order ?? 0),
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

export async function listLeadership() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("leadership")
      .select("id,name,role,image_url,alt_text,sort_order,created_at")
      .order("sort_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []).map((row) => normalizeSupabaseRow(row));
  }

  const leadership = await readLocalLeadership();
  return [...leadership].sort(
    (a, b) => a.sortOrder - b.sortOrder || a.createdAt.localeCompare(b.createdAt)
  );
}

export async function addLeadershipMember(input: LeadershipMemberInput) {
  const createdAt = new Date().toISOString();
  const member: LeadershipMember = {
    id: randomUUID(),
    createdAt,
    ...input,
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("leadership").insert({
      id: member.id,
      name: member.name,
      role: member.role,
      image_url: member.imageUrl,
      alt_text: member.altText,
      sort_order: member.sortOrder,
      created_at: member.createdAt,
    });

    if (error) {
      throw new Error(error.message);
    }

    return member;
  }

  const leadership = await readLocalLeadership();
  leadership.push(member);
  await writeLocalLeadership(leadership);
  return member;
}

export async function updateLeadershipMember(input: {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  altText: string;
  sortOrder: number;
}) {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase
      .from("leadership")
      .update({
        name: input.name,
        role: input.role,
        image_url: input.imageUrl,
        alt_text: input.altText,
        sort_order: input.sortOrder,
      })
      .eq("id", input.id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  const leadership = await readLocalLeadership();
  const updated = leadership.map((item) =>
    item.id === input.id
      ? {
          ...item,
          name: input.name,
          role: input.role,
          imageUrl: input.imageUrl,
          altText: input.altText,
          sortOrder: input.sortOrder,
        }
      : item
  );
  await writeLocalLeadership(updated);
  return true;
}

export async function deleteLeadershipMember(id: string) {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("leadership").delete().eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }

  const leadership = await readLocalLeadership();
  const updated = leadership.filter((item) => item.id !== id);
  await writeLocalLeadership(updated);
  return true;
}
