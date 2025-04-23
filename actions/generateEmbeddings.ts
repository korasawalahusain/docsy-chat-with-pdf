"use server";
import { generateEmbeddingsInPineconeVectorStore } from "@/lib/langchain";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function generateEmbeddings(docId: string) {
  await auth.protect();

  //   turn a PDF into embeddings [0.0123234, 0.234234, ...]
  await generateEmbeddingsInPineconeVectorStore(docId);

  revalidatePath("/dashboard");

  return { completed: true };
}
