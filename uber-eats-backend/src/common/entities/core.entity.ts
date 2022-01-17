import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;
  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;
  @UpdateDateColumn({ nullable: true })
  @Field(() => Date)
  updatedAt: Date;
}
