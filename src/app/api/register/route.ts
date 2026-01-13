
// import prisma from "@/lib/db"; // Aapne db.ts banaya hai
// import bcrypt from "bcryptjs";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, password } = body;

//     if (!email || !password) {
//       return new NextResponse("Missing data", { status: 400 });
//     }

//     // Password ko secure banayein
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     return NextResponse.json({ message: "User created!", user });
//   } catch (error) {
//     console.log(error);
//     return new NextResponse("User already exists or DB error", { status: 500 });
//   }
// }



import prisma from "@/lib/db"; 
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing data", { status: 400 });
    }

    // 🛑 ADMIN RESTRICTION LOGIC (Email or Password check)
    const normalizedEmail = email.toLowerCase().trim();

    // Agar email admin wali ho YA password admin123 ho, toh block kar dein
    if (normalizedEmail === "admin@gmail.com" || password === "admin123") {
      return NextResponse.json(
        { message: "Admin Registration is not allowed" }, 
        { status: 403 } 
      );
    }

    // Check karein ke user pehle se exist toh nahi karta
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists or DB error" },
        { status: 400 }
      );
    }

    // Password ko secure banayein
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email: normalizedEmail,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "User created!", user });

  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}