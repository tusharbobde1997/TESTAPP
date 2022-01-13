import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectManagerWhereInput } from "./ProjectManagerWhereInput";
import { Type } from "class-transformer";
import { ProjectManagerOrderByInput } from "./ProjectManagerOrderByInput";

@ArgsType()
class ProjectManagerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProjectManagerWhereInput,
  })
  @Field(() => ProjectManagerWhereInput, { nullable: true })
  @Type(() => ProjectManagerWhereInput)
  where?: ProjectManagerWhereInput;

  @ApiProperty({
    required: false,
    type: ProjectManagerOrderByInput,
  })
  @Field(() => ProjectManagerOrderByInput, { nullable: true })
  @Type(() => ProjectManagerOrderByInput)
  orderBy?: ProjectManagerOrderByInput;

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

export { ProjectManagerFindManyArgs };
