import { Module } from "@nestjs/common";
import { ProjectManagerModuleBase } from "./base/projectManager.module.base";
import { ProjectManagerService } from "./projectManager.service";
import { ProjectManagerController } from "./projectManager.controller";
import { ProjectManagerResolver } from "./projectManager.resolver";

@Module({
  imports: [ProjectManagerModuleBase],
  controllers: [ProjectManagerController],
  providers: [ProjectManagerService, ProjectManagerResolver],
  exports: [ProjectManagerService],
})
export class ProjectManagerModule {}
