import { ArgsType, Field } from "@nestjs/graphql";
import { ProjectManagerCreateInput } from "./ProjectManagerCreateInput";

@ArgsType()
class CreateProjectManagerArgs {
  @Field(() => ProjectManagerCreateInput, { nullable: false })
  data!: ProjectManagerCreateInput;
}

export { CreateProjectManagerArgs };
