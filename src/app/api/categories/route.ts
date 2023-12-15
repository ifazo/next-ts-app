import { db } from "@/db";

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const product = await db.category.create({
    data,
  });
  return new Response(JSON.stringify(product), {
    headers: { "content-type": "application/json" },
  });
}

export async function GET(request: Request) {
  const products = await db.category.findMany();
  return new Response(JSON.stringify(products), {
    headers: { "content-type": "application/json" },
  });
}
