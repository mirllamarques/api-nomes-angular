import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { JoaoRoutingModule } from './joao-routing.module';
import { JoaoComponent } from './joao/joao.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    JoaoRoutingModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ]
})
export class JoaoModule { }
