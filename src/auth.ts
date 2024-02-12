import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { db } from "./db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    ...authConfig,
    adapter: MongoDBAdapter(db.clientPromise, {
        databaseName: "dummyjson_db",
    }),
    pages: {
        signIn: '/auth/signin',
        signOut: '/',
    },
    session: { strategy: 'jwt' },
})