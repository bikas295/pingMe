import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^\d+$/, { message: 'Phone must contain only digits' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  text: string;
} 