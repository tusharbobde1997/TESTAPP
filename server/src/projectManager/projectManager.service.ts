import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProjectManagerServiceBase } from "./base/projectManager.service.base";

@Injectable()
export class ProjectManagerService extends ProjectManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
