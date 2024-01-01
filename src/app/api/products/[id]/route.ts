import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET({ params }: { params: { id: string } }) {
  try {
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const product = await db.productCollection.findOne({
      _id: new ObjectId(params.id),
    });
    if (!product) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const product = await db.productCollection.findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: await request.json() },
      { returnDocument: "after" }
    );
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const product = await db.productCollection.findOneAndDelete({
      _id: new ObjectId(params.id),
    });
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
