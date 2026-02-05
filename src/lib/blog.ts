import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  highlights: string[];
  nextSteps: string[];
  stats: string[];
  publishedAt?: string;
  createdAt: string;
};

export type BlogPostInput = Omit<BlogPost, "id" | "createdAt">;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const postsFile = path.join(process.cwd(), "data", "blog-posts.json");

const seedPosts: BlogPost[] = [
  {
    id: "seed-mogadishu-lpg-shift",
    slug: "mogadishu-lpg-shift",
    title: "Transforming Mogadishu’s Kitchens: The Shift to LPG",
    excerpt:
      "A closer look at how clean cooking energy is improving health, reducing deforestation, and empowering communities across Somalia’s capital city.",
    content:
      "Clean cooking has become a catalyst for healthier homes and stronger communities. In Mogadishu, families are reporting lower smoke exposure, reduced respiratory illness, and faster meal preparation.\n\nThe shift toward LPG has also supported new supply chains and local jobs, improving economic resilience across neighborhoods.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBao2OSfhlujlZQP9Fi0phbpe1UumYecv-3vTtyJDon4wt7KQBr_QJNqCt9s3oYtqfQqJNmHukq6fcJ5RFeuNF0k9oIENSMqPjCriCaarLpEF_wscwRX3fYJFdxbSq0hyHLoY2gXc0AdTCdrYr7pYlosTQ1HxLhHiyEZOiyU9eWPr_iSeyx_xpZEZMCkP8LNqgAiZX1ZUEoF1lCoLNwT8SJofb1okG6SS4x-g7p2aKRuaiRBUAembfDN9MJ6y3rxnel-vHOr1ndHDtL",
    category: "Featured Story",
    author: "Dr. Hodan Abdi",
    authorRole: "Director of Research",
    readTime: "5 min read",
    tags: ["Clean Cooking", "LPG", "Health", "Climate", "Somalia"],
    highlights: [
      "30% decrease in indoor smoke exposure",
      "2,500 households supported in 2023",
      "14 new community training sessions",
    ],
    nextSteps: [
      "Expand LPG access to 5 new districts",
      "Launch the clean cooking microfinance pilot",
      "Publish Somalia Clean Energy Outlook",
    ],
    stats: ["3-year LPG adoption program", "12 distribution partners", "7 community advisory boards"],
    publishedAt: "2023-10-24",
    createdAt: "2023-10-24T08:00:00.000Z",
  },
  {
    id: "seed-ministry-energy-initiative",
    slug: "ministry-energy-initiative",
    title: "CCAS Partners with Ministry of Energy for New Initiative",
    excerpt:
      "A landmark agreement to accelerate the adoption of clean cooking solutions across rural regions in Somalia.",
    content:
      "A new partnership with the Ministry of Energy will expand clean cooking access beyond urban centers.\n\nThe agreement includes distribution corridors, policy alignment, and new training hubs for communities.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOWYOiD6xPBUW7VUOrLFrachvYWTf0J8_DyvE7JauhfYCsx098aDMMNVcmDox2Zz8cib7TyEheTw9EbuUkLl9JZ3zilXCV3ye7E8J2nb7ZgsRcA78JBZ24086dAA58eYwS-0s-fceeTd-2UdZm9FwKxeF3E1y1gQB3xolgTqNfkkBDVgUFbX7WSbzF38QVHuKOptNHIkPBueqsQUt220eYASDmdHVNReU7ljR5mHA0nB6KjAJzPIy9p6TFv8rS6nG98s22u8sIOs4H",
    category: "News Update",
    author: "Ahmed Nur",
    authorRole: "Policy Lead",
    readTime: "3 min read",
    tags: ["Policy", "Partnership", "Rural", "Energy"],
    highlights: [
      "Joint policy roadmap for 2024",
      "New LPG distribution corridors",
      "Regional training hubs announced",
    ],
    nextSteps: [
      "Finalize implementation schedule",
      "Coordinate district-level launches",
      "Publish progress dashboard",
    ],
    stats: ["8 rural districts", "25 community champions", "4 pilot regions"],
    publishedAt: "2023-10-24",
    createdAt: "2023-10-24T09:00:00.000Z",
  },
  {
    id: "seed-clean-cooking-benefits",
    slug: "clean-cooking-benefits",
    title: "5 Benefits of Clean Cooking for Somali Families",
    excerpt:
      "Beyond convenience, clean cooking brings vital health improvements and economic savings to households.",
    content:
      "Clean cooking reduces household smoke exposure and lowers fuel costs.\n\nFamilies also report shorter cooking times and stronger health outcomes for children.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpg3dU8XaZSE5JVxJ0ob30ArTBiNClyLKNAYCQq7VqMuOVMpfOggBrAEjeg0kf9MaI2G37Flv6lreLuK-kBvJ0tNtYktKXKkeCkPZuqsHcThRW965HVDeZ6RFtOHkLV-RzTsaPv1cYor6aWUTRlyyLJKTkWTi56i248I4ru1xXRHMnViW1g5TRDSEk491KEsyC9zgr8x8wLc2pvW1dL6qDdjFZEuGofjgPimIoyLadcOfwuQ7x3h1s2jyMxm1v5XtvbFs3B1tzj2cw",
    category: "Impact Story",
    author: "Muna Abdirahman",
    authorRole: "Community Coordinator",
    readTime: "4 min read",
    tags: ["Health", "Families", "Savings"],
    highlights: [
      "Lower household fuel expenses",
      "Reduced respiratory illnesses",
      "Shorter cooking times",
    ],
    nextSteps: [
      "Scale household training",
      "Introduce clean cooking starter kits",
      "Expand health outreach",
    ],
    stats: ["5 key benefits", "1,800 households", "12 community clinics"],
    publishedAt: "2023-10-18",
    createdAt: "2023-10-18T10:00:00.000Z",
  },
  {
    id: "seed-quarterly-report-20",
    slug: "quarterly-report-20",
    title: "Quarterly Report: Reducing Charcoal Usage by 20%",
    excerpt:
      "Our latest data shows significant progress in reducing reliance on harmful charcoal in pilot districts.",
    content:
      "Pilot districts demonstrate measurable declines in charcoal sales and higher LPG adoption rates.\n\nThe report highlights policy alignment and supply chain improvements across the program.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrw6uCsEBAKzir1Et8VLO4-otuxXsa9aHEukZnXJDJNbOZ5fIad3usRxEvkEuS-TjuRqZKuHpYnXPIWNLX8jL7K8o2x1DjN-BmOb4UosRnp3srWDvAG9muXqCRxFBnAjBVtyFDBISRdaKyGzScKCRhfe0h8PoZi2rnHv-0nAGIPgShddardNtRv_S1cKZdbnpEJWvoySbAWb_P401TOTjx0oB_ZEA9uJOECP8TF4uXkl91E2VSXoFSLiBtIDlBqENLVmVMUMZsi88t",
    category: "Report",
    author: "CCAS Insights Team",
    authorRole: "Data & Monitoring",
    readTime: "10 min read",
    tags: ["Report", "Data", "Impact"],
    highlights: [
      "20% drop in charcoal sales",
      "Fuel price stability achieved",
      "Expanded distribution routes",
    ],
    nextSteps: [
      "Publish district scorecards",
      "Strengthen monitoring visits",
      "Expand pilot to new zones",
    ],
    stats: ["6 pilot districts", "20% reduction", "9 supply partners"],
    publishedAt: "2023-10-10",
    createdAt: "2023-10-10T08:00:00.000Z",
  },
  {
    id: "seed-lpg-safety-workshop",
    slug: "lpg-safety-workshop",
    title: "Community Workshop: Safe LPG Handling",
    excerpt:
      "Join us this Saturday for a hands-on demonstration on how to safely connect and use LPG cylinders.",
    content:
      "Local workshops provide hands-on safety demonstrations and build confidence for new LPG users.\n\nParticipants receive safety checklists and follow-up support from certified trainers.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDGCLaE5GU473KPLjDUE0Y4fifUemI9YCgJfr9XwhMvO-48k3qnVgYvbu33_FGM3gHG19QyofZ9HiWPqKmjV5WyzclvbnIhMSao-i2PiI4mldCIFpYzmJwJUOsF1BpAUK2KzTx-1iXiKYae65VAgC_T0Qp1YrDsct5JXfTBJwMdPT6GbhgM9UP0TPZEpcDQAzAEfTbyP9pXuvDKbSGnIvpb14X9QYSEyJjFZWnUgmGdWv47eeiXXO8GgryD3qaQ3G2KGroHfuZriKQX",
    category: "Event",
    author: "Ayaan Yusuf",
    authorRole: "Training Coordinator",
    readTime: "2 min read",
    tags: ["Safety", "Training", "Community"],
    highlights: [
      "Live safety demonstrations",
      "Certified local trainers",
      "Emergency response tips",
    ],
    nextSteps: [
      "Launch neighborhood safety clinics",
      "Distribute safety checklists",
      "Partner with local stations",
    ],
    stats: ["120 attendees", "15 trainers", "3 districts"],
    publishedAt: "2023-09-28",
    createdAt: "2023-09-28T08:00:00.000Z",
  },
  {
    id: "seed-solar-cooking-alternative",
    slug: "solar-cooking-alternative",
    title: "Solar Cooking: A Viable Alternative?",
    excerpt:
      "Exploring the potential and challenges of solar-based cooking technologies in the Horn of Africa.",
    content:
      "Solar cookers can complement LPG, especially in sun-rich rural areas.\n\nCCAS evaluates pilot performance data and training needs to assess long-term viability.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8pq17Of8CV9fPjgODJZBinKalihg2pNgzJnwSZ0z0nd0hDGbSlKZx3Q5cOoMtD6mQNpwp1U1iEY3HxDf_BWm5ViL0kUCHtdqmlD5hxWB3-8-PKU_m2cZkGsdY6Gcm8ELn_Tyr5KklBo1xkn-GLFU0JLZhTcVwllandaSLwu9aZ87mT3OSERJmJvBeNdhXHdd2QE9-EQulIxOjCn6YpmT9Xe3b6s60IqRBEnEaa99MdqD4fUrCCg5G3bZ36Qawfd_ugeZwkbc4kguu",
    category: "Insight",
    author: "Layla Ali",
    authorRole: "Innovation Analyst",
    readTime: "6 min read",
    tags: ["Innovation", "Solar", "Research"],
    highlights: [
      "Lower fuel dependency",
      "Long-term cost savings",
      "Strong interest from rural households",
    ],
    nextSteps: [
      "Pilot solar cookers in 3 regions",
      "Collect performance data",
      "Explore blended financing",
    ],
    stats: ["3 pilot zones", "50 test units", "1 innovation grant"],
    publishedAt: "2023-09-15",
    createdAt: "2023-09-15T08:00:00.000Z",
  },
  {
    id: "seed-director-interview",
    slug: "director-interview",
    title: "Interview with CCAS Director on Future Goals",
    excerpt:
      "Our Director discusses the 5-year roadmap for achieving 100% clean cooking access in urban centers.",
    content:
      "The director outlines a roadmap to scale access and affordability, with a focus on workforce development and policy coordination.\n\nKey milestones include infrastructure upgrades and entrepreneur support programs.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6atQDB3RDQcRiwJ0z3hUI1H1kD0cD1a3ZX0lasmHyMxCvgcRoHhCvvNF7LGk_3EYVR15jDnWly_JFT9BpNn_c9QSIU3bZwpfVpH_Rm6zaRq6aJJhQvAWMyKWNkduihaQy-aX8lnzSzsFKXITlMlHEQOcaAIIih87ZuxWYxjV2DYW8NDXqJr5p7ZjrSVk-293ic44A-Rd4vYR74tJZ9wDqId1PZ1TXh_RwU1LGjNMI6lGQi9y_9Y-uOci_sJbP7PC16sLVBaCzt-PK",
    category: "Interview",
    author: "Editor Desk",
    authorRole: "CCAS Media",
    readTime: "8 min read",
    tags: ["Leadership", "Strategy", "Urban"],
    highlights: [
      "5-year roadmap announced",
      "Urban adoption targets",
      "Entrepreneurship focus",
    ],
    nextSteps: [
      "Scale workforce development",
      "Increase micro-retailer support",
      "Expand city partnerships",
    ],
    stats: ["5-year plan", "15 city partners", "200 entrepreneurs"],
    publishedAt: "2023-09-01",
    createdAt: "2023-09-01T08:00:00.000Z",
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

async function writeLocalPosts(posts: BlogPost[]) {
  await fs.mkdir(path.dirname(postsFile), { recursive: true });
  await fs.writeFile(postsFile, JSON.stringify(posts, null, 2));
}

async function readLocalPosts() {
  try {
    const data = await fs.readFile(postsFile, "utf-8");
    return JSON.parse(data) as BlogPost[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      await writeLocalPosts(seedPosts);
      return seedPosts;
    }
    throw error;
  }
}

function normalizeSupabaseRow(row: Record<string, unknown>): BlogPost {
  return {
    id: String(row.id ?? randomUUID()),
    slug: String(row.slug ?? ""),
    title: String(row.title ?? ""),
    excerpt: String(row.excerpt ?? ""),
    content: String(row.content ?? ""),
    imageUrl: String(row.image_url ?? ""),
    category: String(row.category ?? ""),
    author: String(row.author ?? ""),
    authorRole: String(row.author_role ?? ""),
    readTime: String(row.read_time ?? ""),
    tags: Array.isArray(row.tags) ? (row.tags as string[]) : [],
    highlights: Array.isArray(row.highlights) ? (row.highlights as string[]) : [],
    nextSteps: Array.isArray(row.next_steps) ? (row.next_steps as string[]) : [],
    stats: Array.isArray(row.stats) ? (row.stats as string[]) : [],
    publishedAt: row.published_at ? String(row.published_at) : undefined,
    createdAt: String(row.created_at ?? new Date().toISOString()),
  };
}

export async function listBlogPosts() {
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id,slug,title,excerpt,content,image_url,category,author,author_role,read_time,tags,highlights,next_steps,stats,published_at,created_at"
      )
      .order("published_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return (data ?? []).map((row) => normalizeSupabaseRow(row));
  }

  return readLocalPosts();
}

export async function getBlogPostBySlug(slug: string) {
  const normalizedSlug = slugify(slug);
  const supabase = getSupabaseClient();
  if (supabase) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id,slug,title,excerpt,content,image_url,category,author,author_role,read_time,tags,highlights,next_steps,stats,published_at,created_at"
      )
      .eq("slug", slug)
      .maybeSingle();

    if (error) {
      throw new Error(error.message);
    }

    if (data) {
      return normalizeSupabaseRow(data);
    }

    if (normalizedSlug && normalizedSlug !== slug) {
      const { data: normalizedData, error: normalizedError } = await supabase
        .from("blog_posts")
        .select(
          "id,slug,title,excerpt,content,image_url,category,author,author_role,read_time,tags,highlights,next_steps,stats,published_at,created_at"
        )
        .eq("slug", normalizedSlug)
        .maybeSingle();

      if (normalizedError) {
        throw new Error(normalizedError.message);
      }

      if (normalizedData) {
        return normalizeSupabaseRow(normalizedData);
      }
    }

    const { data: fallbackData, error: fallbackError } = await supabase
      .from("blog_posts")
      .select(
        "id,slug,title,excerpt,content,image_url,category,author,author_role,read_time,tags,highlights,next_steps,stats,published_at,created_at"
      )
      .ilike("slug", slug)
      .maybeSingle();

    if (fallbackError) {
      throw new Error(fallbackError.message);
    }

    return fallbackData ? normalizeSupabaseRow(fallbackData) : null;
  }

  const posts = await readLocalPosts();
  return (
    posts.find((post) => post.slug === slug) ??
    posts.find((post) => post.slug === normalizedSlug) ??
    null
  );
}

function slugify(value: string) {
  if (!value) {
    return "";
  }
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function addBlogPost(input: BlogPostInput) {
  const createdAt = new Date().toISOString();
  const resolvedSlug = input.slug ? slugify(input.slug) : slugify(input.title);

  const post: BlogPost = {
    ...input,
    slug: resolvedSlug,
    id: randomUUID(),
    createdAt,
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const { error } = await supabase.from("blog_posts").insert({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.imageUrl,
      category: post.category,
      author: post.author,
      author_role: post.authorRole,
      read_time: post.readTime,
      tags: post.tags,
      highlights: post.highlights,
      next_steps: post.nextSteps,
      stats: post.stats,
      published_at: post.publishedAt ?? null,
      created_at: post.createdAt,
    });

    if (error) {
      throw new Error(error.message);
    }

    return post;
  }

  const posts = await readLocalPosts();
  const filtered = posts.filter((item) => item.slug !== post.slug);
  filtered.unshift(post);
  await writeLocalPosts(filtered);
  return post;
}

export function parseList(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}
