import { getUser } from "@/data/user";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data) {
      return new Response("Request body is required", { status: 400 });
    }
    const validUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!validUser) {
      return new Response("User does not exist", { status: 400 });
    }
    const id = validUser.id;
    const user = await getUser(id);
    return new Response(JSON.stringify(user), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: { "content-type": "application/json" },
    });
  }
}

// import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const requestUrl = new URL(request.url);
//   const formData = await request.formData();
//   const email = String(formData.get("email"));
//   const password = String(formData.get("password"));
//   const cookieStore = cookies();
//   const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

//   await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   return NextResponse.redirect(requestUrl.origin, {
//     status: 301,
//   });
// }
