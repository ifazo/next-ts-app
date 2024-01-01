import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET({ params }: { params: { id: string } }) {
  try {
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const category = await db.categoryCollection.findOne({
      _id: new ObjectId(params.id),
    });
    if (!category) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(JSON.stringify(category), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
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
    const category = await db.categoryCollection.findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: await request.json() },
      { returnDocument: "after" }
    );
    return new Response(JSON.stringify(category), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const category = await db.categoryCollection.findOneAndDelete({
      _id: new ObjectId(params.id),
    });
    return new Response(JSON.stringify(category), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}
