import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmployeeDetailServiceBase } from "./base/employeeDetail.service.base";

@Injectable()
export class EmployeeDetailService extends EmployeeDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
