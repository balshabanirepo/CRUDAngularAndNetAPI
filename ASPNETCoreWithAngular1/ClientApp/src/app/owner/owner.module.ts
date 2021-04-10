import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OwnerListComponent } from './owner-list/owner-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent }
    ])
  ]
})
export class OwnerModule { }
