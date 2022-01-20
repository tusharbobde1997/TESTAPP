import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsInt, ValidateNested } from "class-validator";
import { ProjectManagerWhereUniqueInput } from "../../projectManager/base/ProjectManagerWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class EmployeeDetailUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  empName?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  empSalary?: number;

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
  projectManager?: ProjectManagerWhereUniqueInput | null;
}
export { EmployeeDetailUpdateInput };
