
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Ya jo bhi provider aap use karein
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/db";

export const authOptions: NextAuthOptions = {
  // Purpose: Database (Neon) ko NextAuth se jorna takay session save ho sake
  adapter: PrismaAdapter(prisma), 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt", // Purpose: Fast performance ke liye JSON Web Token use karna
  },
  callbacks: {
    // Purpose: Session mein User ki Email aur ID attach karna takay hum fetch query mein use kar sakein
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = token.sub;
      }
      return session;
    },
  },
};