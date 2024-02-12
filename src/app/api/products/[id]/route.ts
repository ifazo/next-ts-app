import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request, {params}: {params: {id: string}}) {
  try {
    const id = params.id;
    console.log(id)
    const product = await db.productCollection.findOne({
      _id: new ObjectId(id),
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

export async function PATCH(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const product = await db.productCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
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

export async function DELETE(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const product = await db.productCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
