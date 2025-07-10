import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);
    const skip = (page - 1) * pageSize;

    // Filters
    const name = searchParams.get("search_name")?.trim();
    const status = searchParams.get("status")?.trim();
    const agent = searchParams.get("agent")?.trim();
    const startDate = searchParams.get("startDate")?.trim();
    const endDate = searchParams.get("endDate")?.trim();

    // Prisma where conditions
    const where: any = {};

    if (name) {
      where.name = { contains: name, mode: "insensitive" };
    }

    if (status) {
      where.status = status;
    }
    if (agent) {
      where.assignedTo = agent;
    }

    if (startDate || endDate) {
      where.nextReminder = {};
      if (startDate) {
        const parsedStart = new Date(startDate);
        if (!isNaN(parsedStart.getTime())) {
          where.nextReminder.gte = parsedStart;
        }
      }
      if (endDate) {
        const parsedEnd = new Date(endDate);
        if (!isNaN(parsedEnd.getTime())) {
          where.nextReminder.lte = parsedEnd;
        }
      }
    }

    // Fetch paginated + total count
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
      }),
      prisma.lead.count({ where }),
    ]);

    return NextResponse.json({
      data: leads,
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newLead = await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        address: data.address,
        nextReminder: data.nextReminder,
        leadSource: data.leadSource,
        leadType: data.leadType,
        // assignedToId: data.assignedToId,
        // createdById: data.createdById,
      },
    });

    return NextResponse.json(newLead, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}
