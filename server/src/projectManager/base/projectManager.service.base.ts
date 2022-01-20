import { PrismaService } from "nestjs-prisma";
import { Prisma, ProjectManager, EmployeeDetail } from "@prisma/client";

export class ProjectManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProjectManagerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerFindManyArgs>
  ): Promise<number> {
    return this.prisma.projectManager.count(args);
  }

  async findMany<T extends Prisma.ProjectManagerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerFindManyArgs>
  ): Promise<ProjectManager[]> {
    return this.prisma.projectManager.findMany(args);
  }
  async findOne<T extends Prisma.ProjectManagerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerFindUniqueArgs>
  ): Promise<ProjectManager | null> {
    return this.prisma.projectManager.findUnique(args);
  }
  async create<T extends Prisma.ProjectManagerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerCreateArgs>
  ): Promise<ProjectManager> {
    return this.prisma.projectManager.create<T>(args);
  }
  async update<T extends Prisma.ProjectManagerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerUpdateArgs>
  ): Promise<ProjectManager> {
    return this.prisma.projectManager.update<T>(args);
  }
  async delete<T extends Prisma.ProjectManagerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProjectManagerDeleteArgs>
  ): Promise<ProjectManager> {
    return this.prisma.projectManager.delete(args);
  }

  async findEmployeeDetails(
    parentId: string,
    args: Prisma.EmployeeDetailFindManyArgs
  ): Promise<EmployeeDetail[]> {
    return this.prisma.projectManager
      .findUnique({
        where: { id: parentId },
      })
      .employeeDetails(args);
  }
}
