import { Module } from "@nestjs/common";
import { EmployeeDetailModuleBase } from "./base/employeeDetail.module.base";
import { EmployeeDetailService } from "./employeeDetail.service";
import { EmployeeDetailController } from "./employeeDetail.controller";
import { EmployeeDetailResolver } from "./employeeDetail.resolver";

@Module({
  imports: [EmployeeDetailModuleBase],
  controllers: [EmployeeDetailController],
  providers: [EmployeeDetailService, EmployeeDetailResolver],
  exports: [EmployeeDetailService],
})
export class EmployeeDetailModule {}
