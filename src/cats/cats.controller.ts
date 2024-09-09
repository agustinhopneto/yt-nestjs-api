import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return this.catsService.getCats();
  }

  @Get('/:id')
  getCat(@Param('id') id: string) {
    return this.catsService.getCat(Number(id));
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  @Put('/:id')
  updateCat(
    @Param('id') id: string,
    @Body() updateCatDto: Partial<CreateCatDto>,
  ) {
    return this.catsService.updateCat(Number(id), updateCatDto);
  }

  @Delete('/:id')
  @HttpCode(204)
  deleteCat(@Param('id') id: string) {
    this.catsService.deleteCat(Number(id));
  }
}
