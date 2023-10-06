import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateSimpleCrudAppInput {
  @Field()
  task: string;
  @Field({ nullable: true })
  description: string;
}
