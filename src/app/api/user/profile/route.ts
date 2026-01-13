
// import { NextResponse } from "next/server";
// import prisma from "@/lib/db";
// import { getServerSession } from "next-auth";
// import bcrypt from "bcryptjs"; // Password ko encrypt karne ke liye use hota hai

// export async function PATCH(req: Request) {
//   try {
//     const session = await getServerSession(); // Check user logged in hai ya nahi
//     if (!session?.user?.email) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const body = await req.json();
//     const { name, password, image } = body;

//     const updateData: any = {};
//     if (name) updateData.name = name;
//     if (image) updateData.image = image;
    
//     // Agar user ne naya password dala hai, to usay hash karein
//     if (password) {
//       updateData.password = await bcrypt.hash(password, 10);
//     }

//     // Database mein user ki info update karna
//     const updatedUser = await prisma.user.update({
//       where: { email: session.user.email },
//       data: updateData,
//     });

//     return NextResponse.json({ message: "Profile updated successfully" });
//   } catch (error) {
//     return NextResponse.json({ error: "Update failed" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import bcrypt from "bcryptjs";
import { authOptions } from "@/lib/auth"; // ⭐ authOptions import karna zaroori hai

export async function PATCH(req: Request) {
  try {
    // authOptions pass karein taake session reliably mil sake
    const session = await getServerSession(authOptions); 
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, password } = body;

    const updateData: any = {};
    if (name) updateData.name = name;
    
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Database update
    await prisma.user.update({
      where: { email: session.user.email },
      data: updateData,
    });

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}