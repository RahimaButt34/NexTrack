// import { NextResponse } from "next/server";
// import prisma from "@/lib/db";
// import bcrypt from "bcryptjs";

// // DELETE: usersList se kisi user ko nikalne ke liye
// export async function DELETE(req: Request, { params }: { params: { id: string } }) {
//   try {
//     const userId = params.id;
//     await prisma.user.delete({
//       where: { id: userId },
//     });
//     return NextResponse.json({ message: "Record deleted" });
//   } catch (error) {
//     return NextResponse.json({ error: "Delete failed" }, { status: 500 });
//   }
// }

// // PATCH: usersList mein details update karne ke liye
// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//   try {
//     const userId = params.id;
//     const { name, email, password } = await req.json();

//     // Email conflict check
//     if (email) {
//       const existing = await prisma.user.findFirst({
//         where: { email, NOT: { id: userId } },
//       });
//       if (existing) {
//         return NextResponse.json({ error: "Email already in use" }, { status: 400 });
//       }
//     }

//     const updateData: any = { name, email };
//     if (password && password.trim() !== "") {
//       updateData.password = await bcrypt.hash(password, 10);
//     }

//     const updated = await prisma.user.update({
//       where: { id: userId },
//       data: updateData,
//     });

//     return NextResponse.json(updated);
//   } catch (error) {
//     return NextResponse.json({ error: "Update failed" }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

// 1. DELETE Logic
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // ⭐ Fix: params ko await karna zaroori hai
    const { id: userId } = await params;

    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

// 2. PATCH (Update) Logic
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // ⭐ Fix: params ko await karna zaroori hai
    const { id: userId } = await params;
    
    const body = await req.json();
    const { name, email, password } = body;

    const updateData: any = { name, email };
    
    if (password && password.trim() !== "") {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}