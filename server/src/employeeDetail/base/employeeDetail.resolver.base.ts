import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateEmployeeDetailArgs } from "./CreateEmployeeDetailArgs";
import { UpdateEmployeeDetailArgs } from "./UpdateEmployeeDetailArgs";
import { DeleteEmployeeDetailArgs } from "./DeleteEmployeeDetailArgs";
import { EmployeeDetailFindManyArgs } from "./EmployeeDetailFindManyArgs";
import { EmployeeDetailFindUniqueArgs } from "./EmployeeDetailFindUniqueArgs";
import { EmployeeDetail } from "./EmployeeDetail";
import { EmployeeDetailService } from "../employeeDetail.service";

@graphql.Resolver(() => EmployeeDetail)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeDetailResolverBase {
  constructor(
    protected readonly service: EmployeeDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "read",
    possession: "any",
  })
  async _employeeDetailsMeta(
    @graphql.Args() args: EmployeeDetailFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [EmployeeDetail])
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "read",
    possession: "any",
  })
  async employeeDetails(
    @graphql.Args() args: EmployeeDetailFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "EmployeeDetail",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => EmployeeDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "read",
    possession: "own",
  })
  async employeeDetail(
    @graphql.Args() args: EmployeeDetailFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "EmployeeDetail",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => EmployeeDetail)
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "create",
    possession: "any",
  })
  async createEmployeeDetail(
    @graphql.Args() args: CreateEmployeeDetailArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "EmployeeDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"EmployeeDetail"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => EmployeeDetail)
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "update",
    possession: "any",
  })
  async updateEmployeeDetail(
    @graphql.Args() args: UpdateEmployeeDetailArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<EmployeeDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "EmployeeDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"EmployeeDetail"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EmployeeDetail)
  @nestAccessControl.UseRoles({
    resource: "EmployeeDetail",
    action: "delete",
    possession: "any",
  })
  async deleteEmployeeDetail(
    @graphql.Args() args: DeleteEmployeeDetailArgs
  ): Promise<EmployeeDetail | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
