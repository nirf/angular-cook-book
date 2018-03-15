import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Fish', 'Sea Bream', 'http://cdni.condenast.co.uk/330x330/o_r/oct-07_malaysian-style-fish_b_330x330.jpg'),
    new Recipe('Stake', 'Entrecote', 'https://media-cdn.tripadvisor.com/media/photo-s/03/a7/da/b1/l-entrecote-steak-house.jpg')
  ]


  getRecipes() {
    return this.recipes
  }
}
