-- CreateTable
CREATE TABLE "LoungeDrink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "image" TEXT,
    "category" TEXT NOT NULL,
    "isWeeklyOffer" BOOLEAN NOT NULL DEFAULT false,
    "baseTaste" TEXT,
    "price" REAL NOT NULL
);
