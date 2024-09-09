import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  getCats() {
    return this.cats;
  }

  getCat(id: number) {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new HttpException('Cat not found.', HttpStatus.NOT_FOUND);
    }

    return cat;
  }

  createCat(createCatDto: CreateCatDto) {
    const findCat = this.cats.find((cat) => cat.name === createCatDto.name);

    if (findCat) {
      throw new HttpException('Cat already exists.', HttpStatus.BAD_REQUEST);
    }

    const cat: Cat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };

    this.cats.push(cat);

    return cat;
  }

  updateCat(id: number, updateCatDto: Partial<CreateCatDto>) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);

    if (catIndex < 0) {
      throw new HttpException('Cat not found.', HttpStatus.BAD_REQUEST);
    }

    this.cats[catIndex] = {
      ...this.cats[catIndex],
      ...updateCatDto,
    };

    return this.cats[catIndex];
  }

  deleteCat(id: number) {
    const catIndex = this.cats.findIndex((cat) => cat.id === id);

    if (catIndex < 0) {
      throw new HttpException('Cat not found.', HttpStatus.BAD_REQUEST);
    }

    delete this.cats[catIndex];

    this.cats = this.cats.filter(Boolean);
  }
}
