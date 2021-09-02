import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:join(process.cwd(),'src/schema.gql')//true - will generate schema.gql from memory
    }),
    RestaurantsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
