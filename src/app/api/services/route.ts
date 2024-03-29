import { createService, getServices } from "@/data/service";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q") || "";
    const available = searchParams.get("available") || "";
    const sort = searchParams.get("sort") || "asc";
    const category = searchParams.get("category") || "";
    const price = parseInt(searchParams.get("price") || "0");

    const data = await getServices({
      q,
      available,
      sort,
      category,
      price,
    });
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = await createService(body);
    return new Response(JSON.stringify(data), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}
