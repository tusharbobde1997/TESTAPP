import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeDetailWhereUniqueInput } from "./EmployeeDetailWhereUniqueInput";

@ArgsType()
class DeleteEmployeeDetailArgs {
  @Field(() => EmployeeDetailWhereUniqueInput, { nullable: false })
  where!: EmployeeDetailWhereUniqueInput;
}

export { DeleteEmployeeDetailArgs };
