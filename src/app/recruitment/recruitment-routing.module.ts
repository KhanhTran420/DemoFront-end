import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecruitmentListComponent} from './recruitment-list/recruitment-list.component';
import {RecruitmentCreateComponent} from './recruitment-create/recruitment-create.component';
import {RecruitmentEditComponent} from './recruitment-edit/recruitment-edit.component';
import {RecruitmentDeleteComponent} from './recruitment-delete/recruitment-delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: RecruitmentListComponent
  }, {
    path: 'create',
    component: RecruitmentCreateComponent
  }, {
    path: 'edit/:id',
    component: RecruitmentEditComponent
  }, {
    path: 'delete/:id',
    component: RecruitmentDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
