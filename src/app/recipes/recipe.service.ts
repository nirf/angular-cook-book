import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [
    new Recipe('Fish',
      'Sea Bream',
      'http://cdni.condenast.co.uk/330x330/o_r/oct-07_malaysian-style-fish_b_330x330.jpg',
      [new Ingredient('Fish', 1), new Ingredient('Lemon', 1)]),
    new Recipe('Stake',
      'Entrecote',
      'https://media-cdn.tripadvisor.com/media/photo-s/03/a7/da/b1/l-entrecote-steak-house.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Butter', 1)])
  ]


  getRecipes() {
    return this.recipes
  }
}
