import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver{
  @Query(()=>Boolean)
  isPizzaGood():Boolean{
    return true
  }
}