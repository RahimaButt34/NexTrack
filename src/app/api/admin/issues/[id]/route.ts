

// import { NextResponse } from "next/server";
// // import { prisma } from "@/lib/prisma";
// // Is line ko update karein
// import prisma from "@/lib/db";
// // PATCH Method: Yeh sirf ek specific ID ka status update karega
// export async function PATCH(req: Request, { params }: { params: { id: string } }) {
//   try {
//     const body = await req.json();
//     const { status } = body; // Frontend se status (OPEN/COMPLETED) aa raha hai

//     const updatedIssue = await prisma.issue.update({
//       // 'params.id' wahi ID hai jo URL mein admin ne click ki hogi
//       where: { id: params.id }, 
//       data: { status: status },
//     });

//     return NextResponse.json(updatedIssue);
//   } catch (error) {
//     return NextResponse.json({ error: "Status update nahi ho saka" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import prisma from "@/lib/db"; // Use your existing db.ts singleton

export async function PATCH(
  req: Request, 
  { params }: { params: Promise<{ id: string }> } // Params must be a Promise in Next.js 15
) {
  try {
    // 1. Params ko await karke ID nikalna zaroori hai
    const { id } = await params;
    
    // 2. Request body se status nikalna
    const body = await req.json();
    const { status } = body;

    // 3. Database mein status update karna
    const updatedIssue = await prisma.issue.update({
      where: { id: id }, 
      data: { status: status },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json({ error: "Database update failed" }, { status: 500 });
  }
}