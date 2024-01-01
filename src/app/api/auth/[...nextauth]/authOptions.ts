import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Email", type: "email", placeholder: "Your E-mail" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          return data;
        } catch (err) {
          return null;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      // const varifyToken = jwt.verify(
      //   token?.token as string,
      //   process.env.NEXTAUTH_SECRET as Secret
      // ) as JwtPayload;
      // if (!varifyToken) {
      //   console.log("token expired so new token generated");
      //   const data = await refreshToken(token?.token as string);
      //   console.log(data)
      //   token.token = data?.token;
      // }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
