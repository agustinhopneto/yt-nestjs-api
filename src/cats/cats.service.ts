import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cats.interface';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  getCats() {
    return this.cats;
  }

  createCat(createCatDto: CreateCatDto) {
    const cat: Cat = {
      id: this.cats.length + 1,
      ...createCatDto,
    };

    this.cats.push(cat);

    return cat;
  }
}
