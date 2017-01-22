import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CategoryDbService implements InMemoryDbService {
  createDb() {
    const categories = [
      { id: 1, name: 'Backgrounds', count: 0, cost: 50},
      { id: 2, name: 'CGs', count: 0, cost: 75},
      { id: 3, name: 'Character Sprites', count: 0, cost: 80},
      { id: 4, name: 'Music', count: 0, cost: 100},
      { id: 5, name: 'Sound Effects', count: 0, cost: 10},
      { id: 6, name: 'Marketing', count: 0, cost: 100},
    ];
    return {categories};
  }
}