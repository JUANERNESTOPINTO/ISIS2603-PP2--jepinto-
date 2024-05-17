import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';
import { NavesListComponent } from './naves-list/naves-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavesListComponent],
  declarations: [NavesListComponent]
})
export class NavesModule { }

