import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET({ params }: { params: { id: string } }) {
  try {
    console.log(params.id)
    if (!params || !params.id) {
      return new Response("Invalid request", { status: 400 });
    }
    const user = await db.userCollection.findOne({
      _id: new ObjectId(params.id),
    });
    if (!user) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(JSON.stringify(user), {
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
    const user = await db.userCollection.findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: await request.json() },
      { returnDocument: "after" }
    );
    return new Response(JSON.stringify(user), {
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
    const user = await db.userCollection.findOneAndDelete({
      _id: new ObjectId(params.id),
    });
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
