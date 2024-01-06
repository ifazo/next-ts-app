import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const user = await db.userCollection.findOne({
      _id: new ObjectId(id),
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
  request: Request
) {
  try {
    const id = request.url.split("/").pop();
    const user = await db.userCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
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

export async function DELETE(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const user = await db.userCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
