import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(()=>Restaurant)
export class RestaurantResolver{
  @Query(()=>[Restaurant])
  restaurants(@Args('vegan') vegan:boolean):Restaurant[]{
    if(vegan==true){
      return [{id:"0", name:"Test",vegan:true,address:"add"}]
    }else{
      return [{id:"0", name:"Test",vegan:false,address:"addd"}]
    }    
  }  
  @Mutation(()=>Restaurant)
  createRestaurant(@Args() CreateRestaurantInput:CreateRestaurantDTO):Restaurant{
    return {id:CreateRestaurantInput.id,name:CreateRestaurantInput.name,vegan:CreateRestaurantInput.vegan,address:CreateRestaurantInput.address}
  }
}