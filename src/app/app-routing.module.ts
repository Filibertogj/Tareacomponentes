import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {ProyectoComponent } from './proyecto/proyecto.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'proyecto', component: ProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
