import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyCreateComponent} from './company-create/company-create.component';
import {CompanyEditComponent} from './company-edit/company-edit.component';
import {CompanyDeleteComponent} from './company-delete/company-delete.component';


const routes: Routes = [
  {
  path: 'list',
  component: CompanyListComponent
}, {
    path: 'create',
    component: CompanyCreateComponent
  }, {
    path: 'edit/:id',
    component: CompanyEditComponent
  }, {
    path: 'delete/:id',
    component: CompanyDeleteComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
