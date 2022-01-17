import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}

  getUser(): Promise<User> {
    return this.users.find().then((users) => users[0]);
  }

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<undefined | string> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return 'Email is already exists!';
      }
      this.users.save(this.users.create({ email, password, role }));
    } catch (error) {
      return "Couldn't create account!";
    }
  }
}
