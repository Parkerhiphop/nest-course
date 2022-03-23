import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

/**
 * @feature
 * Create a Simple Service & CRUD of coffee
 */
@Injectable()
export class CoffeesService {
  // private: 只有在 Service 內能被存取
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  // 封裝 Business Logic： 讓 Controller 可以直接呼叫這個 function 就好
  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    // throw 'Bubble up the random error'; // -> 501
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      // throw new HTTPException('Error Msg', HttpStatus.NOT_FOUND)
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
