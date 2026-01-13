
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET: Single Issue fetch karne ke liye
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const issue = await prisma.issue.findUnique({ where: { id } });
    if (!issue) return NextResponse.json({ error: "Not Found" }, { status: 404 });
    return NextResponse.json(issue);
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// PATCH: Update karne ke liye
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { title, description } = await req.json();
    const updated = await prisma.issue.update({
      where: { id },
      data: { title, description },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Update Failed" }, { status: 500 });
  }
}

// DELETE: Database se permanent delete karne ke liye
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.issue.delete({ where: { id } });
    return NextResponse.json({ message: "Deleted" });
  } catch (error) {
    return NextResponse.json({ error: "Delete Failed" }, { status: 500 });
  }
}