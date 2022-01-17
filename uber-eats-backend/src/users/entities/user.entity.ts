import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

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
  email: string;
  @Column()
  @Field(() => String)
  password: string;
  @Column({ type: 'enum', enum: Role })
  @Field(() => Role)
  role: Role;
}
