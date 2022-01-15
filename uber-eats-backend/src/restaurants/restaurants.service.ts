import { UpdateRestaurantDTO } from './dtos/update-restaurant.dto';
import { CreateRestaurantDTO } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant) private restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find();
  }

  createRestaurant(
    CreateRestaurantInput: CreateRestaurantDTO,
  ): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(CreateRestaurantInput);

    return this.restaurants.save(newRestaurant);
  }

  updateRestaurant(updateRestaurantDTO: UpdateRestaurantDTO) {
    return this.restaurants.update(updateRestaurantDTO.id, {
      ...updateRestaurantDTO.data,
    });
  }
}
