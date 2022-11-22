import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomeComponent } from './nome/nome/nome.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'nomes'},
  {path: 'nomes', component: NomeComponent}]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
