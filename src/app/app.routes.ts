import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';

export const routes: Routes = [
  { 
  	path: 'games', 
  	component: GamesComponent 
  },
  {
  	path:'**',
  	redirectTo: 'games'
  },
    { 
  	path: 'competitions', 
  	component: competitionsComponent 
  },
];