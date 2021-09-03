import { Field, ArgsType } from '@nestjs/graphql';
import { IsBoolean, IsString, Length } from 'class-validator';

@ArgsType()
export class CreateRestaurantDTO{
  @Field(type=>String) 
  @IsString()
  id:string;

  @Field(type=>String) 
  @IsString()
  @Length(4,30)
  name:string;

  @Field(type=>Boolean) 
  @IsBoolean()
  vegan:boolean;

  @Field(type=>String)
  @IsString()
  address:string;
}