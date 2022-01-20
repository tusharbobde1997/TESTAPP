/*
  Warnings:

  - You are about to drop the column `manager` on the `EmployeeDetail` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmployeeDetail" DROP COLUMN "manager",
ADD COLUMN     "projectManagerId" TEXT;

-- AddForeignKey
ALTER TABLE "EmployeeDetail" ADD CONSTRAINT "EmployeeDetail_projectManagerId_fkey" FOREIGN KEY ("projectManagerId") REFERENCES "ProjectManager"("id") ON DELETE SET NULL ON UPDATE CASCADE;
