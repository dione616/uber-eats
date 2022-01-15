import { UpdateRestaurantDTO } from './dtos/update-restaurant.dto';
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

  @Mutation(() => Restaurant || Boolean)
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

  @Mutation(() => Restaurant || Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDTO: UpdateRestaurantDTO,
  ): Promise<Restaurant | boolean> {
    try {
      const updatedEntity = await this.restaurantService.updateRestaurant(
        updateRestaurantDTO,
      );

      if (updatedEntity.affected > 0) {
        return {
          id: updateRestaurantDTO.id,
          name: updateRestaurantDTO.data.name,
          address: updateRestaurantDTO.data.address,
          category: updateRestaurantDTO.data.category,
          vegan: updateRestaurantDTO.data.vegan,
        };
      }

      return false;
    } catch (error) {
      console.log('ERROR:', error);
      return false;
    }
  }
}
