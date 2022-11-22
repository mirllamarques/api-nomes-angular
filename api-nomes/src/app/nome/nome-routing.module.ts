import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomeComponent } from './nome/nome.component';

const routes: Routes = [{path: '', component: NomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NomeRoutingModule {

}
