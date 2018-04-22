import { NgModule } from '@angular/core'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { RouterModule, Routes } from '@angular/router'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
