
// // import NextAuth from "next-auth";
// // import { PrismaAdapter } from "@auth/prisma-adapter";
// // import prisma from "@/lib/db";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import bcrypt from "bcryptjs";


// // const handler = NextAuth({
// //   adapter: PrismaAdapter(prisma),
// //   providers: [
// //     CredentialsProvider({
// //       name: "credentials",
// //       credentials: {
// //         email: { label: "Email", type: "text" },
// //         password: { label: "Password", type: "password" },
// //       },
// //       async authorize(credentials) {
// //         if (!credentials?.email || !credentials?.password) return null;

// //         const user = await prisma.user.findUnique({
// //           where: { email: credentials.email },
// //         });

// //         if (!user) return null;

// //         const isPasswordCorrect = await bcrypt.compare(
// //           credentials.password,
// //           user.password
// //         );

// //         if (!isPasswordCorrect) return null;

// //         return user;
// //       },
// //     }),
// //   ],
// //   session: { strategy: "jwt" },
// //   secret: process.env.AUTH_SECRET, // Jo aapki .env.local mein hai
// //   pages: {
// //     signIn: "/login",
// //   },
// // });

// // export { handler as GET, handler as POST };


// import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/lib/db";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";

// const handler = NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         if (!user) return null;

//         const isPasswordCorrect = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );

//         if (!isPasswordCorrect) return null;

//         // Yahan se user object return hota hai jisme role shamil hota hai
//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           role: user.role, // Ye role database se aa raha hai
//         };
//       },
//     }),
//   ],
//   callbacks: {
//     // 1. JWT mein role save karein
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = (user as any).role;
//       }
//       return token;
//     },
//     // 2. Session mein role ko available karein taake frontend use kar sake
//     async session({ session, token }) {
//       if (session.user) {
//         (session.user as any).role = token.role;
//       }
//       return session;
//     },
//   },
//   session: { strategy: "jwt" },
//   secret: process.env.AUTH_SECRET,
//   pages: {
//     signIn: "/login",
//   },
// });

// export { handler as GET, handler as POST };


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
      token.id = user.id; // ⭐ User ID yahan add karein
    }
    return token;
  },
  async session({ session, token }) {
    if (session.user) {
      (session.user as any).role = token.role;
      (session.user as any).id = token.id; // ⭐ Session mein ID pass karein
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