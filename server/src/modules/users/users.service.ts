import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const currentMaxId = this.users[this.users.length - 1]?.id || 0;

    const user = {
      id: currentMaxId + 1,
      ...createUserDto,
    };

    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(this.getMessageNotFoundUser(id));
    }

    return this.users[index];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    const newUser = {
      ...user,
      ...updateUserDto,
    };

    const index = this.users.findIndex((user) => user.id === id);

    this.users[index] = newUser;

    return newUser;
  }

  getMessageNotFoundUser(id: number) {
    return `User with id ${id} not found`;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      throw new NotFoundException(this.getMessageNotFoundUser(id));
    }

    this.users.splice(index, 1);

    return;
  }
}
