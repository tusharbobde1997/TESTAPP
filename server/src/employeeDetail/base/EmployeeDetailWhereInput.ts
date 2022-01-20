import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { ProjectManagerWhereUniqueInput } from "../../projectManager/base/ProjectManagerWhereUniqueInput";
@InputType()
class EmployeeDetailWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  empName?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  empSalary?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectManagerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectManagerWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectManagerWhereUniqueInput, {
    nullable: true,
  })
  projectManager?: ProjectManagerWhereUniqueInput;
}
export { EmployeeDetailWhereInput };
