import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavComponent],
  exports: [NavComponent],
})
export class SharedModule {}
