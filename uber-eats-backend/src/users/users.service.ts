import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private users: Repository<User>,
    private readonly config: ConfigService,
  ) {}

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

  async login({ email, password }: LoginInput): Promise<LoginOutput> {
    try {
      const user = await this.users.findOne({ email });
      if (!user) {
        return { ok: false, error: 'Wrong credentials!' };
      }
      const passwordCorrect = await user.checkPassword(password);
      if (!passwordCorrect) {
        return { ok: false, error: 'Wrong credentials!' };
      }
      const token = jwt.sign({ id: user.id }, this.config.get('SECRET_KEY'));
      return { ok: true, token };
    } catch (error) {
      return { ok: false, error: 'Wrong credentials!' };
    }
  }
}
