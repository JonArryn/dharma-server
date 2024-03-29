import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

declare global {
	// eslint-disable-next-line
	var __db: PrismaClient | undefined;
}

if (!global.__db) {
	global.__db = new PrismaClient();
}
// eslint-disable-next-line
db = global.__db;

export { db };
