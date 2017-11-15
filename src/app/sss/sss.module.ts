import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SssRoutingModule } from './sss-routing.module';
import { CccComponent } from './ccc/ccc.component';
import { SssComponent } from './sss/sss.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  imports: [
    CommonModule,
    SssRoutingModule
  ],

  declarations: [CccComponent, SssComponent, Page1Component],
  bootstrap: [CccComponent]
})
export class SssModule { }
