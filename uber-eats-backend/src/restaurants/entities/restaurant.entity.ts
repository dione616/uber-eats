import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
  @Field(() => String)
  @Column()
  name: string;
  @Field(() => Boolean, { nullable: true })
  @Column()
  vegan?: boolean;
  @Field(() => String)
  @Column()
  address: string;
  @Field(() => String)
  @Column()
  category: string;
}
