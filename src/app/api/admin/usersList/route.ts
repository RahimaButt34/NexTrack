
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET: Saare users fetch karne ke liye
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" }, // Naye users upar ayenge
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}