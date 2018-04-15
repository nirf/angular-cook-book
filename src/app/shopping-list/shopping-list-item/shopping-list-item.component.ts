import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
  @Input() ingredient: Ingredient

  constructor() {
  }

  ngOnInit() {
  }

}
