import { db } from "@/db";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await db.user.update({
    where: { id: params.id },
    data: await request.json(),
  });
  return new Response(JSON.stringify(user), {
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.user.delete({ where: { id: params.id } });
  return new Response(null, { status: 204 });
}
