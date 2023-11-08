import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal/meal-list/meal-list.component';
import { MealDetailComponent } from './meal/meal-detail/meal-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MealService } from './meal/meal.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [MealListComponent, MealDetailComponent],
  providers: [MealService],
  exports: [MealListComponent, MealDetailComponent],
})
export class FeaturesModule {}
