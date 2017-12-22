import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fish', 'Sea Bream', 'http://cdni.condenast.co.uk/330x330/o_r/oct-07_malaysian-style-fish_b_330x330.jpg'),
    new Recipe('Stake', 'Entrecote', 'https://media-cdn.tripadvisor.com/media/photo-s/03/a7/da/b1/l-entrecote-steak-house.jpg')
  ]
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

  ngOnInit() {
  }

}
