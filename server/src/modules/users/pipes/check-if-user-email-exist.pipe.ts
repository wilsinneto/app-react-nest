import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UsersService } from '../users.service';

@Injectable()
export class CheckIfUserEmailExistPipe implements PipeTransform<CreateUserDto> {
  constructor(private readonly usersService: UsersService) {}

  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const userIsExisting = this.usersService.findOneByEmail(value.email);

    if (userIsExisting) {
      throw new BadRequestException('Email já cadastrado');
    }

    return value;
  }
}
