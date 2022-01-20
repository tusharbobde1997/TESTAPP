import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, ValidateNested, IsOptional } from "class-validator";
import { ProjectManagerWhereUniqueInput } from "../../projectManager/base/ProjectManagerWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class EmployeeDetailCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  empName!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  empSalary!: number;

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
export { EmployeeDetailCreateInput };
