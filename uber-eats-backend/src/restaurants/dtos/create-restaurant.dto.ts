import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDTO{
  @Field(type=>String) 
  id:string;
  @Field(type=>String) 
  name:string;
  @Field(type=>Boolean) 
  vegan:boolean;
  @Field(type=>String) 
  address:string;
}