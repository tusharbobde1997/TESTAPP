import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectManagerWhereUniqueInput } from "./ProjectManagerWhereUniqueInput";

@ArgsType()
class DeleteProjectManagerArgs {
  @Field(() => ProjectManagerWhereUniqueInput, { nullable: false })
  where!: ProjectManagerWhereUniqueInput;
}

export { DeleteProjectManagerArgs };
