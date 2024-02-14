import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request, {params}: {params: {id: string}}) {
  try {
    const id = params.id;
    console.log(id)
    const product = await db.productCollection.findOne({ _id: new ObjectId(id) });
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}

export async function PATCH(request: Request, {params}: {params: {id: string}}) {
  try {
    const id = params.id;
    const product = await db.productCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: await request.json() },
      { returnDocument: "after" }
    );
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
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
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}
