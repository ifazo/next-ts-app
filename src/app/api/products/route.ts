import { db } from "@/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const category = searchParams.get("category");
    const price = searchParams.get("price");
    if (name) {
      const product = await db.productCollection.find({ name }).toArray();
      return new Response(JSON.stringify(product), {
        headers: { "content-type": "application/json" },
      });
    } else if (category) {
      const product = await db.productCollection.find({ category }).toArray();
      return new Response(JSON.stringify(product), {
        headers: { "content-type": "application/json" },
      });
    } else if (price) {
      const product = await db.productCollection.find({ price }).toArray();
      return new Response(JSON.stringify(product), {
        headers: { "content-type": "application/json" },
      });
    } else {
      const products = await db.productCollection.find().toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
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
    const product = await db.productCollection.insertOne(data);
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
