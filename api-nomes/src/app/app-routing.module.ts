import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoaoComponent } from './joao/joao/joao.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'nomes'},
  {path: 'nomes', component: JoaoComponent}]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
