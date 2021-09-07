import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }
  @Mutation(() => Restaurant)
  async createRestaurant(
    @Args('input') CreateRestaurantInput: CreateRestaurantDTO,
  ): Promise<Restaurant | boolean> {
    try {
      return await this.restaurantService.createRestaurant(
        CreateRestaurantInput,
      );
    } catch (error) {
      console.log('ERROR:', error);
      return false;
    }
  }
}
