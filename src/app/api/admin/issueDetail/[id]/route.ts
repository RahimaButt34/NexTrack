import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// 1. GET: Kisi specific issue ka data mangwane ke liye
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const issue = await prisma.issue.findUnique({
      where: { id },
      include: { user: true } // Agar user info bhi chahiye
    });
    
    if (!issue) return NextResponse.json({ error: "Issue not found" }, { status: 404 });
    return NextResponse.json(issue);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// 2. PUT: Title aur Description ko edit/save karne ke liye
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { title, description } = await req.json();
    
    const updatedIssue = await prisma.issue.update({
      where: { id },
      data: { title, description }
    });
    
    return NextResponse.json(updatedIssue);
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

// 3. DELETE: Issue ko database se khatam karne ke liye
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    await prisma.issue.delete({ where: { id } });
    return NextResponse.json({ message: "Issue deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}