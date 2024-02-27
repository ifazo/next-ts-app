// import { db } from "@/db";

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
//     if (!data) {
//       return new Response("Request body is required", { status: 400 });
//     }
//     const validUser = await db.userCollection.findOne({
//       email: data.email,
//       password: data.password,
//     });
//     return new Response(JSON.stringify(validUser), {
//       headers: { "content-type": "application/json" },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
