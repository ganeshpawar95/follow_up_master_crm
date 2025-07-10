export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import ExcelJS from "exceljs";
import { PassThrough } from "stream";
const { default: PDFDocument } = require("pdfkit");

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export async function GET(req: NextRequest) {
  try {
    const format = req.nextUrl.searchParams.get("format") || "pdf";
    const leads = await prisma.lead.findMany();

    if (format === "pdf") {
      const doc = new PDFDocument();
      const passthrough = new PassThrough();
      doc.pipe(passthrough);

      doc.fontSize(20).text("Leads Report", { underline: true });
      doc.moveDown();

      leads.forEach((lead, index) => {
        doc
          .fontSize(12)
          .text(
            `${index + 1}. ${lead.name} (${lead.email}, ${
              lead.phone
            })\nAddress: ${lead.address}\nStatus: ${
              lead.status
            }\nNext Reminder: ${lead.nextReminder}`
          );
        doc.moveDown();
      });

      doc.end();

      const buffer = await streamToBuffer(passthrough);

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="leads.pdf"`,
        },
      });
    }

    if (format === "excel") {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Leads");

      worksheet.columns = [
        { header: "ID", key: "id", width: 36 },
        { header: "Name", key: "name", width: 20 },
        { header: "Email", key: "email", width: 30 },
        { header: "Phone", key: "phone", width: 15 },
        { header: "Address", key: "address", width: 30 },
        { header: "Status", key: "status", width: 10 },
        { header: "Lead Source", key: "leadSource", width: 20 },
        { header: "Lead Type", key: "leadType", width: 10 },
        { header: "Next Reminder", key: "nextReminder", width: 20 },
        { header: "Created At", key: "createdAt", width: 20 },
      ];

      leads.forEach((lead) => {
        worksheet.addRow({
          ...lead,
          nextReminder: lead.nextReminder?.toISOString(),
          createdAt: lead.createdAt.toISOString(),
        });
      });

      const buffer = await workbook.xlsx.writeBuffer();

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="leads.xlsx"`,
        },
      });
    }

    return NextResponse.json({ error: "Invalid format" }, { status: 400 });
  } catch (error) {
    console.error("Error exporting leads:", error);
    return NextResponse.json(
      { error: "Failed to export leads" },
      { status: 500 }
    );
  }
}
