import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from '../models/cats.model';

@Injectable()
export class CatsService {
  private cats: Cat[] = [
    { id: 1, name: 'Tom', breed: 'Siamese', age: 2 },
    { id: 2, name: 'Jerry', breed: 'Persian', age: 3 },
  ];

  //   getHello(): string {
  //     return 'Hello World cats.service tesss!';
  //   }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    const cat = this.cats.find((cat) => cat.id === id);
    if (!cat) {
      throw new NotFoundException({ message: `Cat not found id ${id}` });
    }

    return cat;
  }

  create(cat: Cat): Cat {
    const newId = this.cats.length
      ? Math.max(...this.cats.map((c) => c.id)) + 1
      : 1;
    const newCat = { id: newId, ...cat };
    this.cats.push(newCat);
    return newCat;
  }

  update(id: number, updatedCat: Cat): Cat {
    const cat = this.findOne(id);
    if (!cat) {
      throw new NotFoundException({ message: `Cat not found id ${id}` });
    }

    const index = this.cats.findIndex((cat) => cat.id === id);
    if (index !== -1) {
      return (this.cats[index] = { id, ...updatedCat });
    }
  }

  delete(id: number): any {
    const deletedCat = this.cats.find((cat) => cat.id === id);
    if (!deletedCat) {
      throw new NotFoundException({ message: `Cat not found id ${id}` });
    }
    this.cats = this.cats.filter((cat) => cat.id !== id);
    return { message: `Cat with id ${id} has been deleted` };
  }
}
