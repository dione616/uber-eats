import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
  @Field(() => String)
  @Column()
  @IsString()
  @Length(3, 30)
  name: string;
  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  @IsBoolean()
  @IsOptional()
  vegan?: boolean;
  @Field(() => String)
  @Column()
  @IsString()
  address: string;
  @Field(() => String)
  @Column()
  @IsString()
  category: string;
}
