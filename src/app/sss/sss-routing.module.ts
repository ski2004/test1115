import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CccComponent } from './ccc/ccc.component';
import { SssComponent } from './sss/sss.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {
    path: 'sss',
    component: SssComponent,
    children: [{ path: 'page1', component: Page1Component }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SssRoutingModule {}
