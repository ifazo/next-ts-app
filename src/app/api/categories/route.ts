import { db } from "@/db";

export async function GET() {
  try {
    const categories = await db.categoryCollection.find({}).toArray();
    return new Response(JSON.stringify(categories), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const category = await db.categoryCollection.insertOne(data);
    return new Response(JSON.stringify(category), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}