import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'budget.component.html',
})
export class AppComponent implements OnInit {
  startingAmount: number = 1000;
  spent: number = 0;
  overbudget: boolean = false;
  categories: Category[];
  working: number = 0;
  editingAmount: boolean = false;
  editingCategories: boolean = false;
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .then(categories => this.categories = categories);
  }
  addCategory(name: string, cost: number):void {
    this.categoryService.create(name, cost)
      .then(category => {
        this.categories.push(category);
      });
  }
  deleteCategory(category:Category):void {
    this.categoryService.delete(category.id)
      .then(() => {
        this.categories = this.categories.filter(c => c != category);
      });
  }
  updateCategory(category:Category):void {
    this.categoryService.update(category);
  }

  editCategories():void {
    this.editingCategories = true;
  }

  finishEditCategories(): void {
    this.editingCategories = false;
  }



  editAmount():void {
    this.editingAmount = true;
  }

  cancelEditAmount(): void {
    this.editingAmount = false;
  }

  finishEditAmount(amount: number): void {
    this.startingAmount = amount;
    this.editingAmount = false;
    this.updateOverbudget();
  }

  spending(): number {
    return 100 * this.spent / this.startingAmount | 0;
  }

  spendProgressWidth(): number {
    const spending = this.spending();
    if (spending > 100) {
      return 100;
    }
    return spending;
  }

  addOne(category: Category): void {
    category.count += 1;
    this.spent += parseInt(category.cost.toString());
    this.updateOverbudget();
  }

  removeOne(category: Category): void {
    if (category.count > 0) {
      category.count -= 1;
      this.spent -= parseInt(category.cost.toString());
      this.updateOverbudget();
    }
  }

  private updateOverbudget(): void {
    this.overbudget = this.spent > this.startingAmount;
  }
}
