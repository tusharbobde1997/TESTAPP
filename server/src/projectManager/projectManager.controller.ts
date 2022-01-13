import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProjectManagerService } from "./projectManager.service";
import { ProjectManagerControllerBase } from "./base/projectManager.controller.base";

@swagger.ApiTags("project-managers")
@common.Controller("project-managers")
export class ProjectManagerController extends ProjectManagerControllerBase {
  constructor(
    protected readonly service: ProjectManagerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
