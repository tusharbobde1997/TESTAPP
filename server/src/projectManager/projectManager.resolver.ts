import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProjectManagerResolverBase } from "./base/projectManager.resolver.base";
import { ProjectManager } from "./base/ProjectManager";
import { ProjectManagerService } from "./projectManager.service";

@graphql.Resolver(() => ProjectManager)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProjectManagerResolver extends ProjectManagerResolverBase {
  constructor(
    protected readonly service: ProjectManagerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
