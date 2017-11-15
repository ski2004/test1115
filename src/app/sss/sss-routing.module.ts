import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CccComponent } from './ccc/ccc.component';
import { SssComponent } from './sss/sss.component';

const routes: Routes = [
  { path: '',  component: CccComponent },
  { path: 'xxx',  component: SssComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SssRoutingModule { }
