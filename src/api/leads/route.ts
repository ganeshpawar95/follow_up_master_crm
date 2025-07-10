import { NextRequest, NextResponse } from "next/server";
import prisma from "";

export async function GET(req: NextRequest) {
  try {
    const leads = await prisma.lead.findMany();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        status: data.status,
      },
    });
    return NextResponse.json(lead);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}
