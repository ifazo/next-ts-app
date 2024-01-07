import { db } from "@/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const exitingUser = await db.userCollection.findOne({ email: data.email });
    if (exitingUser) {
      return new Response("User already exists", { status: 400 });
    }
    const user = await db.userCollection.insertOne(data);
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}