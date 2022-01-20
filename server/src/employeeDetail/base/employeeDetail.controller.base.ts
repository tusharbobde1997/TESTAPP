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
import { EmployeeDetailService } from "../employeeDetail.service";
import { EmployeeDetailCreateInput } from "./EmployeeDetailCreateInput";
import { EmployeeDetailWhereInput } from "./EmployeeDetailWhereInput";
import { EmployeeDetailWhereUniqueInput } from "./EmployeeDetailWhereUniqueInput";
import { EmployeeDetailFindManyArgs } from "./EmployeeDetailFindManyArgs";
import { EmployeeDetailUpdateInput } from "./EmployeeDetailUpdateInput";
import { EmployeeDetail } from "./EmployeeDetail";
@swagger.ApiBearerAuth()
export class EmployeeDetailControllerBase {
  constructor(
    protected readonly service: EmployeeDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: EmployeeDetail })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: EmployeeDetailCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "EmployeeDetail",
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
        `providing the properties: ${properties} on ${"EmployeeDetail"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        projectManager: data.projectManager
          ? {
              connect: data.projectManager,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [EmployeeDetail] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => EmployeeDetailFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail[]> {
    const args = plainToClass(EmployeeDetailFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EmployeeDetail",
    });
    const results = await this.service.findMany({
      ...args,
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: EmployeeDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: EmployeeDetailWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "EmployeeDetail",
    });
    const result = await this.service.findOne({
      where: params,
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
    resource: "EmployeeDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: EmployeeDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: EmployeeDetailWhereUniqueInput,
    @common.Body()
    data: EmployeeDetailUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "EmployeeDetail",
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
        `providing the properties: ${properties} on ${"EmployeeDetail"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          projectManager: data.projectManager
            ? {
                connect: data.projectManager,
              }
            : undefined,
        },
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
    resource: "EmployeeDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: EmployeeDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: EmployeeDetailWhereUniqueInput
  ): Promise<EmployeeDetail | null> {
    try {
      return await this.service.delete({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
