import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantService } from './restaurants.service';

@Resolver(()=>Restaurant)
export class RestaurantResolver{
  constructor(private readonly restaurantService:RestaurantService){}
  @Query(()=>[Restaurant])
  restaurants():Promise<Restaurant[]>{    
    return this.restaurantService.getAll()      
  }  
  @Mutation(()=>Restaurant)
  createRestaurant(@Args() CreateRestaurantInput:CreateRestaurantDTO):Restaurant{
    return {id:CreateRestaurantInput.id,name:CreateRestaurantInput.name,vegan:CreateRestaurantInput.vegan,address:CreateRestaurantInput.address,category:"Cat1"}
  }
}