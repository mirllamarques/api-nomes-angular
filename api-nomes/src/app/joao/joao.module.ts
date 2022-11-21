import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { JoaoRoutingModule } from './joao-routing.module';
import { JoaoComponent } from './joao/joao.component';


@NgModule({
  declarations: [
    JoaoComponent
  ],
  imports: [
    CommonModule,
    JoaoRoutingModule,
    MatInputModule,
    MatIconModule
  ]
})
export class JoaoModule { }
