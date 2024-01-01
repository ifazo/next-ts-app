import { db } from "@/db";

export async function GET() {
  try {
    const review = await db.reviewCollection.find({}).toArray();
    return new Response(JSON.stringify(review), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const review = await db.reviewCollection.insertOne(data);
    return new Response(JSON.stringify(review), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}
