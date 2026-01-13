

import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    // Security: Check karein ke user login hai aur ADMIN hai
    // Note: Aapke schema mein role: "ADMIN" hona chahiye
    if (!session || (session.user as any).role !== "ADMIN") {
       // return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Ek hi baar mein saara data fetch karna
    const [totalUsers, totalIssues, usersList] = await Promise.all([
      prisma.user.count(),
      prisma.issue.count(),
      prisma.user.findMany({
        select: { id: true, name: true, email: true, role: true },
        orderBy: { createdAt: "desc" },
        take: 5, // Sirf 5 naye users dikhane ke liye
      }),
    ]);

    return NextResponse.json({
      totalUsers,
      totalIssues,
      usersList,
    }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}