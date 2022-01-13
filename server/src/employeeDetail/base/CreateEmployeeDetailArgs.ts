import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeDetailCreateInput } from "./EmployeeDetailCreateInput";

@ArgsType()
class CreateEmployeeDetailArgs {
  @Field(() => EmployeeDetailCreateInput, { nullable: false })
  data!: EmployeeDetailCreateInput;
}

export { CreateEmployeeDetailArgs };
