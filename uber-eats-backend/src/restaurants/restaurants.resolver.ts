import { Restaurant } from './entities/restaurant.entity';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(()=>Restaurant)
export class RestaurantResolver{
  @Query(()=>Restaurant)
  myRestaurant():Restaurant{
    return {id:"0", name:"Test"}
  }
}