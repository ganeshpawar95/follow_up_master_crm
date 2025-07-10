import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust to your prisma client

export async function PUT(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }

    const data = await req.json();

    // Optional: validate fields here!

    // Special handling for date
    let nextReminder = undefined;
    if (data.nextReminder) {
      const date = new Date(data.nextReminder);
      if (isNaN(date.getTime())) {
        return NextResponse.json(
          { error: "Invalid nextReminder date" },
          { status: 400 }
        );
      }
      nextReminder = date;
    }

    // Perform update
    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        nextReminder: nextReminder,
        leadSource: data.leadSource,
        leadType: data.leadType,
        status: data.status,
        // assignedToId: data.assignedToId,
        // createdById: data.createdById,
      },
    });

    return NextResponse.json(updatedLead, { status: 200 });
  } catch (error: any) {
    console.error("PUT /api/leads/[id] error:", error);
    return NextResponse.json(
      { error: error.message ?? "Failed to update lead" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    if (!id) {
      return NextResponse.json({ error: "Missing lead ID" }, { status: 400 });
    }
    await prisma.lead.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("DELETE /api/leads/[id] error:", error);
    return NextResponse.json(
      { error: error.message ?? "Failed to delete lead" },
      { status: 500 }
    );
  }
}
