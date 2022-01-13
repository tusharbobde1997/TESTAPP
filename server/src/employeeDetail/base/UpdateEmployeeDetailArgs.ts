import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeDetailWhereUniqueInput } from "./EmployeeDetailWhereUniqueInput";
import { EmployeeDetailUpdateInput } from "./EmployeeDetailUpdateInput";

@ArgsType()
class UpdateEmployeeDetailArgs {
  @Field(() => EmployeeDetailWhereUniqueInput, { nullable: false })
  where!: EmployeeDetailWhereUniqueInput;
  @Field(() => EmployeeDetailUpdateInput, { nullable: false })
  data!: EmployeeDetailUpdateInput;
}

export { UpdateEmployeeDetailArgs };
