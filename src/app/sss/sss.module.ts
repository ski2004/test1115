import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SssRoutingModule } from './sss-routing.module';
import { CccComponent } from './ccc/ccc.component';
import { SssComponent } from './sss/sss.component';

@NgModule({
  imports: [
    CommonModule,
    SssRoutingModule
  ],

  declarations: [CccComponent, SssComponent],
  bootstrap: [CccComponent]
})
export class SssModule { }
