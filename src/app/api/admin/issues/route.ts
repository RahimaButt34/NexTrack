import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// Is line ko update karein
import prisma from "@/lib/db";
// GET Method: Yeh saare issues fetch karta hai
export async function GET() {
  try {
    const issues = await prisma.issue.findMany({
      // Hum 'user' ko include kar rahe hain taake User ID ke saath uska Name bhi mil sake
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc", // Taake naya issue sabse upar dikhe
      },
    });

    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json({ error: "Issues load nahi ho sakay" }, { status: 500 });
  }
}