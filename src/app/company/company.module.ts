import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import {CompanyListComponent} from './company-list/company-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyDeleteComponent } from './company-delete/company-delete.component';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyCreateComponent,
    CompanyEditComponent,
    CompanyDeleteComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CompanyModule { }
