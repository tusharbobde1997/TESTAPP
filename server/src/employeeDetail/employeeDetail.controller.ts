import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeDetailService } from "./employeeDetail.service";
import { EmployeeDetailControllerBase } from "./base/employeeDetail.controller.base";

@swagger.ApiTags("employee-details")
@common.Controller("employee-details")
export class EmployeeDetailController extends EmployeeDetailControllerBase {
  constructor(
    protected readonly service: EmployeeDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
