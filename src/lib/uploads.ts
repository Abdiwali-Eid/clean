import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucketName = "form-uploads";

function getSupabaseClient() {
  if (!supabaseUrl || !supabaseKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
}

function sanitizeFileName(value: string) {
  return value
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9._-]/g, "");
}

export async function uploadFormFile(file: File, formType: string) {
  const safeName = sanitizeFileName(file.name || "upload");
  const fileId = randomUUID();
  const filePath = `${formType}/${fileId}-${safeName}`;

  const supabase = getSupabaseClient();
  if (supabase) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
    return data.publicUrl;
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads", formType);
  await fs.mkdir(uploadsDir, { recursive: true });
  const targetPath = path.join(uploadsDir, `${fileId}-${safeName}`);
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(targetPath, buffer);
  return `/uploads/${formType}/${fileId}-${safeName}`;
}
