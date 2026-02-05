import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type SubmissionFieldValue = string | string[];

export type Submission = {
  id: string;
  type: string;
  createdAt: string;
  fields: Record<string, SubmissionFieldValue>;
};

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const submissionsFile = path.join(process.cwd(), "data", "submissions.json");

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

async function readLocalSubmissions() {
  try {
    const data = await fs.readFile(submissionsFile, "utf-8");
    return JSON.parse(data) as Submission[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

async function writeLocalSubmissions(submissions: Submission[]) {
  await fs.mkdir(path.dirname(submissionsFile), { recursive: true });
  await fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
}

export async function addSubmission(input: Omit<Submission, "id" | "createdAt">) {
  const submission: Submission = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("form_submissions").insert({
      id: submission.id,
      type: submission.type,
      created_at: submission.createdAt,
      fields: submission.fields,
    });
    if (error) {
      throw new Error(error.message);
    }
    return submission;
  }

  const submissions = await readLocalSubmissions();
  submissions.unshift(submission);
  await writeLocalSubmissions(submissions);
  return submission;
}

export async function listSubmissions() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("form_submissions")
      .select("id,type,created_at,fields")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []).map((row) => ({
      id: row.id as string,
      type: row.type as string,
      createdAt: row.created_at as string,
      fields: (row.fields ?? {}) as Record<string, SubmissionFieldValue>,
    }));
  }

  return readLocalSubmissions();
}
