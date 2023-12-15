import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const db = prisma;

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    console.log("successfully connected to database!!");
  })
  .catch(async (e) => {
    console.error(e);
  });
