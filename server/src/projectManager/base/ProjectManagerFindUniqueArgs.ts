import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectManagerWhereUniqueInput } from "./ProjectManagerWhereUniqueInput";

@ArgsType()
class ProjectManagerFindUniqueArgs {
  @Field(() => ProjectManagerWhereUniqueInput, { nullable: false })
  where!: ProjectManagerWhereUniqueInput;
}

export { ProjectManagerFindUniqueArgs };
