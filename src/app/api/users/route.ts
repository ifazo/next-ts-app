import { db } from "@/db";

export async function GET() {
  const user = await db.user.findMany();
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  if (!data) {
    return new Response("Request body is required", { status: 400 });
  }
  const exitingUser = await db.user.findUnique({
    where: { email: data.email },
  });
  if (exitingUser) {
    return new Response("User already exists", { status: 400 });
  }
  const user = await db.user.create({ data });
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}
