
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 🛑 1. ADMIN HARDCODED LOGIC (Bina Database ke Login)
        // Agar user admin@gmail.com aur admin123 enter kare
        if (credentials.email === "admin@gmail.com" && credentials.password === "admin123") {
          return {
            id: "admin-id-001",
            name: "Main Admin",
            email: "admin@gmail.com",
            role: "ADMIN",
          };
        }

        // 👤 2. NORMAL USER LOGIC (Database check)
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Agar database mein user nahi mila
        if (!user) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // Database wala role (USER)
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };