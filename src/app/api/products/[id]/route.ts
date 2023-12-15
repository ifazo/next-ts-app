import { db } from "@/db";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = await db.product.findUnique({
    where: { id: params.id },
  });
  if (!product) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(JSON.stringify(product), {
    headers: { "content-type": "application/json" },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = await db.product.update({
    where: { id: params.id },
    data: await request.json(),
  });
  return new Response(JSON.stringify(product), {
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await db.product.delete({ where: { id: params.id } });
  return new Response(null, { status: 204 });
}
