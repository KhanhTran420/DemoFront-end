import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyCreateComponent} from './company-create/company-create.component';


const routes: Routes = [
  {
  path: 'list',
  component: CompanyListComponent
}, {
    path: 'create',
    component: CompanyCreateComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
