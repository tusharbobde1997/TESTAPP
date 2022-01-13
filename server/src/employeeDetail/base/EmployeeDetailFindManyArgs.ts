import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeDetailWhereInput } from "./EmployeeDetailWhereInput";
import { Type } from "class-transformer";
import { EmployeeDetailOrderByInput } from "./EmployeeDetailOrderByInput";

@ArgsType()
class EmployeeDetailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmployeeDetailWhereInput,
  })
  @Field(() => EmployeeDetailWhereInput, { nullable: true })
  @Type(() => EmployeeDetailWhereInput)
  where?: EmployeeDetailWhereInput;

  @ApiProperty({
    required: false,
    type: EmployeeDetailOrderByInput,
  })
  @Field(() => EmployeeDetailOrderByInput, { nullable: true })
  @Type(() => EmployeeDetailOrderByInput)
  orderBy?: EmployeeDetailOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmployeeDetailFindManyArgs };
