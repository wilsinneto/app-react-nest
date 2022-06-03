import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome deve ser uma string' })
  @MinLength(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
  @IsNotEmpty({ message: 'Campo nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Campo e-mail é obrigatório' })
  email: string;

  @IsString({ message: 'Senha deve ser uma string' })
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  password: string;
}
