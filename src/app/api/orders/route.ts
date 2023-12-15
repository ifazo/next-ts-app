import { db } from "@/db";

export async function GET() {
  const order = await db.order.findMany();
  return new Response(JSON.stringify(order), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const order = await db.order.create({
    data,
  });
  return new Response(JSON.stringify(order), {
    headers: { "content-type": "application/json" },
  });
}
