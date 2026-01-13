// import prisma from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   try {
//     const { title, description } = await req.json();

//     const newIssue = await prisma.issue.create({
//       data: {
//         title: title,
//         description: description,
//         status: "OPEN",
//         // userId: null // Humne schema mein isay optional (?) kar diya hai isliye ab ye error nahi dega
//       },
//     });

//     return NextResponse.json(newIssue, { status: 201 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }


// import prisma from "@/lib/db";
// import { NextResponse } from "next/server";

// // 1. DATA FETCH KARNE KA ROUTE (GET)
// // Is se aapka dashboard 0 ki jagah database ka actual count dikhayega
// export async function GET() {
//   try {
//     const issues = await prisma.issue.findMany({
//       orderBy: { createdAt: "desc" },
//     });
//     return NextResponse.json(issues, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: "Fetch Error: " + error.message }, { status: 500 });
//   }
// }

// // 2. DATA STORE KARNE KA ROUTE (POST)
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { title, description } = body;

//     const newIssue = await prisma.issue.create({
//       data: {
//         title,
//         description,
//         status: "OPEN",
//       },
//     });

//     return NextResponse.json(newIssue, { status: 201 });
//   } catch (error: any) {
//     // Agar Turbopack error de, to console mein check karein
//     console.error("Prisma Error:", error);
//     return NextResponse.json({ error: "Database Error: " + error.message }, { status: 500 });
//   }
// }


import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; // Auth options import karein

// 1. DATA FETCH (Sirf login user ke liye)
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Agar session nahi hai to error
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const issues = await prisma.issue.findMany({
      where: {
        // @ts-ignore (Kyunke session.user.id custom field hai)
        userId: session.user.id, // Filter: Sirf iss user ki ID wale issues lao
      },
      orderBy: { createdAt: "desc" },
    });
    
    return NextResponse.json(issues, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: "Fetch Error: " + error.message }, { status: 500 });
  }
}

// 2. DATA STORE (User ID ke sath link karke)
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, description } = body;

    const newIssue = await prisma.issue.create({
      data: {
        title,
        description,
        status: "OPEN",
        // @ts-ignore
        userId: session.user.id, // Naya issue current user se connect karein
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: "Database Error: " + error.message }, { status: 500 });
  }
}