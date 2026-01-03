import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Naruto', weapon: 'Ninjutsu' },
    { id: 1, name: 'Sasuke', weapon: 'Chidori' },
    { id: 2, name: 'Kakashi', weapon: 'Sharingan' },
  ];

  getNinjas(weapon?: 'Ninjutsu' | 'Chidori' | 'Sharingan') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      id: Date.now(),
      ...createNinjaDto,
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    const ninja = this.getNinja(id);
    this.ninjas[this.ninjas.indexOf(ninja)] = { ...ninja, ...updateNinjaDto };
  }

  deleteNinja(id: number) {
    const ninja = this.getNinja(id);
    this.ninjas.splice(this.ninjas.indexOf(ninja), 1);
  }

}
