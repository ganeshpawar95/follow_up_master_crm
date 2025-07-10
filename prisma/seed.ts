import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Admin",
        email: "admin@crm.com",
        hashedPassword: "hashed",
        role: "ADMIN",
      },
      {
        name: "Agent One",
        email: "agent1@crm.com",
        hashedPassword: "hashed",
        role: "AGENT",
      },
    ],
  });
}

main().finally(() => prisma.$disconnect());
