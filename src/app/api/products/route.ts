import { db } from "@/db";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const skip = searchParams.get('skip');
    const limit = searchParams.get('limit');
    const sort = searchParams.get('sort');
    const category = searchParams.get('category');

    if (category) {
      const products = await db.productCollection.find({ category }).toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
    else if (sort) {
      const products = await db.productCollection.find().sort({ [sort]: 1 }).toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
    else if (search) {
      const products = await db.productCollection.find({ $text: { $search: search } }).toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
    else if (skip && limit) {
      const products = await db.productCollection.find().skip(Number(skip)).limit(Number(limit)).toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
    else {
      const products = await db.productCollection.find().toArray();
      return new Response(JSON.stringify(products), {
        headers: { "content-type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const product = await db.productCollection.insertOne(data);
    return new Response(JSON.stringify(product), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}
