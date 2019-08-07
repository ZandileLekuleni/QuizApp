import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'foodq', loadChildren: './page/foodq/foodq.module#FoodqPageModule' },
  { path: 'foodr', loadChildren: './page/foodr/foodr.module#FoodrPageModule' },
  { path: 'music', loadChildren: './page/music/music.module#MusicPageModule' },
  { path: 'musicq', loadChildren: './page/musicq/musicq.module#MusicqPageModule' },
  { path: 'musicr', loadChildren: './page/musicr/musicr.module#MusicrPageModule' },
  { path: 'sportq', loadChildren: './page/sportq/sportq.module#SportqPageModule' },
  { path: 'sportr', loadChildren: './page/sportr/sportr.module#SportrPageModule' },
  { path: 'foodc', loadChildren: './page/foodc/foodc.module#FoodcPageModule' },
  { path: 'musicc', loadChildren: './page/musicc/musicc.module#MusiccPageModule' },
  { path: 'sportc', loadChildren: './page/sportc/sportc.module#SportcPageModule' },
  { path: 'total', loadChildren: './page/total/total.module#TotalPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
