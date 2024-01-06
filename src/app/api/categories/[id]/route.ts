import { db } from "@/db";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const category = await db.categoryCollection.findOne({
      _id: new ObjectId(id),
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
  request: Request
) {
  try {
    const id = request.url.split("/").pop();
    const category = await db.categoryCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
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

export async function DELETE(request: Request) {
  try {
    const id = request.url.split("/").pop();
    const category = await db.categoryCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });
    return new Response(JSON.stringify(category), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error)
  }
}
