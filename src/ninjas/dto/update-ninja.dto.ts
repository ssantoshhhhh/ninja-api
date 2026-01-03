import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninja.dto';
import { NinjasController } from '../ninjas.controller';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}

