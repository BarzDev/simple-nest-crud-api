import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ExpensesService } from './expense/expense.service';
import { ExpensesController } from './expense/expense.controller';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [CatsModule, PrismaModule],
  controllers: [AppController, ExpensesController],
  providers: [AppService, ExpensesService],
})
export class AppModule {}
