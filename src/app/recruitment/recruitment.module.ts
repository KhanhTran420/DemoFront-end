import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import {RecruitmentListComponent} from './recruitment-list/recruitment-list.component';
import { RecruitmentCreateComponent } from './recruitment-create/recruitment-create.component';
import { RecruitmentEditComponent } from './recruitment-edit/recruitment-edit.component';
import { RecruitmentDeleteComponent } from './recruitment-delete/recruitment-delete.component';


@NgModule({
  declarations: [RecruitmentListComponent, RecruitmentCreateComponent, RecruitmentEditComponent, RecruitmentDeleteComponent],
  imports: [
    CommonModule,
    RecruitmentRoutingModule
  ]
})
export class RecruitmentModule { }
