import {IsEnum, MinLength} from "class-validator";


export class CreateNinjaDto {
  @MinLength(3)
  name: string;
  id?: number;
  @IsEnum(['Ninjutsu', 'Chidori', 'Sharingan'],{message: 'Weapon must be Ninjutsu, Chidori or Sharingan'})
  weapon: string;

}