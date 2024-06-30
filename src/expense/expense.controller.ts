import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { ExpensesService } from './expense.service';
import { CreateExpenseDto } from 'src/models/expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.createExpense(createExpenseDto);
  }

  @Get()
  async findAll() {
    return this.expensesService.getExpenses();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.expensesService.getExpenseById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.expensesUpdateInput,
  ) {
    return this.expensesService.updateExpense(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.expensesService.deleteExpense(id);
  }
}
