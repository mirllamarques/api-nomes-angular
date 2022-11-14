import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'joao'}, {path: 'joao', loadChildren:() => import('./joao/joao.module').then(m => m.JoaoModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
