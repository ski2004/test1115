import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CccComponent } from './ccc/ccc.component';
import { SssComponent } from './sss/sss.component';

const routes: Routes = [
  { path: "", //設定根目錄為這一層
  component: CccComponent,
  // Product 包含的小組件們
   children: [
      {path: "", component: CccComponent},
      {path: ":id", component: SssComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SssRoutingModule { }
