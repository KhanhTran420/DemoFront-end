import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RecruitmentService} from '../../service/recruitment.service';
import {Company} from '../../model/company';
import {City} from '../../model/city';
import {Field} from '../../model/field';
import {Vacancies} from '../../model/vacancies';
import {WorkingTime} from '../../model/working-time';

@Component({
  selector: 'app-recruitment-create',
  templateUrl: './recruitment-create.component.html',
  styleUrls: ['./recruitment-create.component.css']
})
export class RecruitmentCreateComponent implements OnInit {

  company: Company[] = [];
  city: City[] = [];
  field: Field[] = [];
  vacancy: Vacancies[] = [];
  workingTime: WorkingTime[] = [];

  recruitmentForm: FormGroup = new FormGroup({
    codeRecruitment: new FormControl(''),
    titleRecruitment: new FormControl(''),
    description: new FormControl(''),
    expDate: new FormControl(''),
    gender: new FormControl(''),
    emplployeeQuantity: new FormControl(''),
    salary: new FormControl(''),
    city: new FormControl(''),
    company: new FormControl(''),
    field: new FormControl(''),
    vacancy: new FormControl(''),
    workingTime: new FormControl('')
  });
  constructor(private recruitmentService: RecruitmentService) { }

  ngOnInit() {
  }
  submit() {
    const recruitment = this.recruitmentForm.value;
    this.recruitmentService.saveRecruitment(recruitment).subscribe(() => {
      this.recruitmentForm.reset();
      alert('Success');
    }, e => {
      console.log(e);
    });
  }
}
