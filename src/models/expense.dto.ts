// src/expenses/dto/create-expense.dto.ts
import { transaction_type } from '@prisma/client';
import {
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class CreateExpenseDto {
  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsEnum(transaction_type)
  @IsOptional()
  transaction_type?: transaction_type;

  @IsNumber()
  balance: number;

  @IsNotEmpty()
  description: string;
}
