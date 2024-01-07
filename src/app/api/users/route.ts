import { db } from "@/db";

export async function GET() {
  try {
    const user = await db.userCollection.find({}).toArray();
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}
