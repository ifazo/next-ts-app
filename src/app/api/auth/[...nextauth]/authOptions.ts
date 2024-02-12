// import { db } from "@/db";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import { randomBytes, randomUUID } from "crypto";
// import { AuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: AuthOptions = {
//   adapter: MongoDBAdapter(db.clientPromise) as any, //! this give error in login
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//       profile(profile) {
//         console.log(profile)
//         return {
//           id: profile.id,
//           name: profile.name,
//           email: profile.email,
//           image: profile.avatar_url,
//           role: profile.role ?? "user",
//         };
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//       profile(profile) { 
//         console.log(profile)
//         return {
//           id: profile.sub,
//           name: profile.name,
//           email: profile.email,
//           image: profile.picture,
//           role: profile.role ?? "user",
//         };
//       }
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         name: { label: "Name", type: "text", placeholder: "Name" },
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//         role: {label: "Role", type: "text" }
//       },
//       async authorize(credentials) {
//         const res = await fetch(`${process.env.NEXTAUTH_URL}/api/signin`, {
//           method: "POST",
//           body: JSON.stringify(credentials),
//           headers: { "Content-Type": "application/json" },
//         });
//         const user = await res.json();

//         if (res.ok && user) {
//           return user;
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/signin",
//     signOut: "/",
//     error: "/auth/error",
//     // verifyRequest: "/auth/verify-request",
//     // newUser: "/auth/new-user",
//   },
//   callbacks: {
//     async jwt({ token, user }) {

//       return {
//         ...token,
//         ...user,
//       };
//     },
//     async session({ session, token }) {

//       return {
//         ...session,
//         ...token,
//       };
//     },
//   },
//   session: {
//     // Choose how you want to save the user session.
//     // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
//     // If you use an `adapter` however, we default it to `"database"` instead.
//     // You can still force a JWT session by explicitly defining `"jwt"`.
//     // When using `"database"`, the session cookie will only contain a `sessionToken` value,
//     // which is used to look up the session in the database.
//     strategy: "database",

//     // Seconds - How long until an idle session expires and is no longer valid.
//     maxAge: 30 * 24 * 60 * 60, // 30 days

//     // Seconds - Throttle how frequently to write to database to extend a session.
//     // Use it to limit write operations. Set to 0 to always update the database.
//     // Note: This option is ignored if using JSON Web Tokens
//     updateAge: 24 * 60 * 60, // 24 hours

//     // The session token is usually either a random UUID or string, however if you
//     // need a more customized session token string, you can define your own generate function.
//     generateSessionToken: () => {
//       return randomUUID?.() ?? randomBytes(32).toString("hex")
//     }
//   },
//   jwt: {
//     // The maximum age of the NextAuth.js issued JWT in seconds.
//     // Defaults to `session.maxAge`.
//     maxAge: 60 * 60 * 24 * 30,
//     // You can define your own encode/decode functions for signing and encryption
//     // async encode() { },
//     // async decode() { },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };
