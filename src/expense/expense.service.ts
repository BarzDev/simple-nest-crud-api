import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, expenses } from '@prisma/client';
import { PrismaService } from 'src/primsa.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async createExpense(data: Prisma.expensesCreateInput): Promise<expenses> {
    return this.prisma.expenses.create({
      data,
    });
  }

  async getExpenses(): Promise<expenses[]> {
    return this.prisma.expenses.findMany();
  }

  async getExpenseById(id: string): Promise<expenses | null> {
    try {
      return this.prisma.expenses.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }
  }

  async updateExpense(
    id: string,
    data: Prisma.expensesUpdateInput,
  ): Promise<expenses> {
    try {
      return this.prisma.expenses.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }
  }

  async deleteExpense(id: string): Promise<expenses> {
    try {
      return await this.prisma.expenses.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }
  }
}
