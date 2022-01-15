import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDTO } from './create-restaurant.dto';

@InputType()
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDTO) {}

@InputType()
export class UpdateRestaurantDTO {
  @Field(() => String)
  id: string;

  @Field(() => UpdateRestaurantInputType)
  data: UpdateRestaurantInputType;
}
