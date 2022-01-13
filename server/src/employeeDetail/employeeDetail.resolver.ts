import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmployeeDetailResolverBase } from "./base/employeeDetail.resolver.base";
import { EmployeeDetail } from "./base/EmployeeDetail";
import { EmployeeDetailService } from "./employeeDetail.service";

@graphql.Resolver(() => EmployeeDetail)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeDetailResolver extends EmployeeDetailResolverBase {
  constructor(
    protected readonly service: EmployeeDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
