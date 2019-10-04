import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForwarddocPage } from './forwarddoc.page';

import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  
} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: ForwarddocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule     
  ],
  declarations: [ForwarddocPage]
})
export class ForwarddocPageModule {}
