import { PrismaService } from "nestjs-prisma";
import { Prisma, EmployeeDetail } from "@prisma/client";

export class EmployeeDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailFindManyArgs>
  ): Promise<number> {
    return this.prisma.employeeDetail.count(args);
  }

  async findMany<T extends Prisma.EmployeeDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailFindManyArgs>
  ): Promise<EmployeeDetail[]> {
    return this.prisma.employeeDetail.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailFindUniqueArgs>
  ): Promise<EmployeeDetail | null> {
    return this.prisma.employeeDetail.findUnique(args);
  }
  async create<T extends Prisma.EmployeeDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailCreateArgs>
  ): Promise<EmployeeDetail> {
    return this.prisma.employeeDetail.create<T>(args);
  }
  async update<T extends Prisma.EmployeeDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailUpdateArgs>
  ): Promise<EmployeeDetail> {
    return this.prisma.employeeDetail.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDetailDeleteArgs>
  ): Promise<EmployeeDetail> {
    return this.prisma.employeeDetail.delete(args);
  }
}
