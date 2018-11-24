import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

/*
 * Components
 */
import {Category, CategoryService} from "../services/category.service";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // Slide Categories
  slideCategories: Category[] = [];

  // Card categories
  cardCategories: Observable<Category[]>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.cardCategories = this.categoryService.getCategories();
    //console.log(this.cardCategories);
    this.cardCategories.subscribe((categories: Category[]) => {
      this.slideCategories = [
        categories[0],
        categories[1],
        categories[2]
      ];
    }, errors => {
        console.log(errors);
    });
  }

}
