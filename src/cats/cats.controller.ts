import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/models/cats.model';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  //   @Get()
  //   getHello(): string {
  //     return this.catsService.getHello();
  //   }

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Cat {
    return this.catsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(@Body() cat: Cat): Cat {
    return this.catsService.create(cat);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() updatedCat: Cat): Cat {
    return this.catsService.update(id, updatedCat);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): any {
    return this.catsService.delete(id);
  }
}
