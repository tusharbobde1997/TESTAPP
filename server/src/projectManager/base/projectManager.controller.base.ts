import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ProjectManagerService } from "../projectManager.service";
import { ProjectManagerCreateInput } from "./ProjectManagerCreateInput";
import { ProjectManagerWhereInput } from "./ProjectManagerWhereInput";
import { ProjectManagerWhereUniqueInput } from "./ProjectManagerWhereUniqueInput";
import { ProjectManagerFindManyArgs } from "./ProjectManagerFindManyArgs";
import { ProjectManagerUpdateInput } from "./ProjectManagerUpdateInput";
import { ProjectManager } from "./ProjectManager";
import { EmployeeDetailWhereInput } from "../../employeeDetail/base/EmployeeDetailWhereInput";
import { EmployeeDetail } from "../../employeeDetail/base/EmployeeDetail";
@swagger.ApiBearerAuth()
export class ProjectManagerControllerBase {
  constructor(
    protected readonly service: ProjectManagerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ProjectManager })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProjectManagerCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProjectManager> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ProjectManager",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ProjectManager"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        pmName: true,
        pmSalary: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ProjectManager] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ProjectManagerFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProjectManager[]> {
    const args = plainToClass(ProjectManagerFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProjectManager",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        pmName: true,
        pmSalary: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ProjectManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProjectManager | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ProjectManager",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        pmName: true,
        pmSalary: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ProjectManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @common.Body()
    data: ProjectManagerUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProjectManager | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProjectManager",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ProjectManager"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          pmName: true,
          pmSalary: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ProjectManager })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProjectManagerWhereUniqueInput
  ): Promise<ProjectManager | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          pmName: true,
          pmSalary: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/employeeDetails")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => EmployeeDetailWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyEmployeeDetails(
    @common.Req() request: Request,
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail[]> {
    const query: EmployeeDetailWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EmployeeDetail",
    });
    const results = await this.service.findEmployeeDetails(params.id, {
      where: query,
      select: {
        createdAt: true,
        empName: true,
        empSalary: true,
        id: true,

        projectManager: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/employeeDetails")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "update",
    possession: "any",
  })
  async createEmployeeDetails(
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @common.Body() body: ProjectManagerWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      employeeDetails: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProjectManager",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ProjectManager"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/employeeDetails")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "update",
    possession: "any",
  })
  async updateEmployeeDetails(
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @common.Body() body: ProjectManagerWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      employeeDetails: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProjectManager",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ProjectManager"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/employeeDetails")
  @nestAccessControl.UseRoles({
    resource: "ProjectManager",
    action: "update",
    possession: "any",
  })
  async deleteEmployeeDetails(
    @common.Param() params: ProjectManagerWhereUniqueInput,
    @common.Body() body: ProjectManagerWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      employeeDetails: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProjectManager",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ProjectManager"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
