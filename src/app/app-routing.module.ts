import {AaaComponent} from './aaa/aaa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  component: AaaComponent },
  { path: 'ssss',  loadChildren: './sss/sss.module#SssModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
