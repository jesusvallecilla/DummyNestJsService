import { IsString, MaxLength } from 'class-validator';

export class CreateTodoDto {

  @IsString()
  @MaxLength(50)
  title: string

  @IsString()
  @MaxLength(100)
  description: string

}
