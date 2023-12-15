import { db } from "@/db";

export async function GET() {
  const review = await db.review.findMany();
  return new Response(JSON.stringify(review), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const review = await db.review.create({
    data,
  });
  return new Response(JSON.stringify(review), {
    headers: { "content-type": "application/json" },
  });
}
