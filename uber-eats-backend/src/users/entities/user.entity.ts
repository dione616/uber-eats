import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail, IsEnum, Length } from 'class-validator';

enum Role {
  OWNER = 'OWNER',
  CLIENT = 'CLIENT',
  DELIVERY = 'DELIVERY',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, { name: 'Role' });

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field(() => String)
  @IsEmail()
  email: string;
  @Column()
  @Field(() => String)
  @Length(6, 50)
  password: string;
  @Column({ type: 'enum', enum: Role })
  @Field(() => Role)
  @IsEnum(Role)
  role: Role;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(aPassword, this.password);
    } catch (error) {
      console.log('Error', error);
    }
  }
}
