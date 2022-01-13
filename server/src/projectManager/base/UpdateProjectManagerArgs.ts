import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectManagerWhereUniqueInput } from "./ProjectManagerWhereUniqueInput";
import { ProjectManagerUpdateInput } from "./ProjectManagerUpdateInput";

@ArgsType()
class UpdateProjectManagerArgs {
  @Field(() => ProjectManagerWhereUniqueInput, { nullable: false })
  where!: ProjectManagerWhereUniqueInput;
  @Field(() => ProjectManagerUpdateInput, { nullable: false })
  data!: ProjectManagerUpdateInput;
}

export { UpdateProjectManagerArgs };
