import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeDetailWhereUniqueInput } from "./EmployeeDetailWhereUniqueInput";

@ArgsType()
class EmployeeDetailFindUniqueArgs {
  @Field(() => EmployeeDetailWhereUniqueInput, { nullable: false })
  where!: EmployeeDetailWhereUniqueInput;
}

export { EmployeeDetailFindUniqueArgs };
