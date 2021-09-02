import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant{
  @Field(()=>String)
  id:string
  @Field(()=>String)
  name:string
}