import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  IsInt,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { ProjectManager } from "../../projectManager/base/ProjectManager";
@ObjectType()
class EmployeeDetail {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => ProjectManager,
  })
  @ValidateNested()
  @Type(() => ProjectManager)
  @IsOptional()
  projectManager?: ProjectManager | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { EmployeeDetail };
