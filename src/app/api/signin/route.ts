import { db } from "@/db";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const validUser = await db.userCollection.findOne({
      email: data.email,
      password: data.password,
    });
    return new Response(JSON.stringify(validUser), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
