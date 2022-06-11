import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../service/company.service';
import {CityService} from '../../service/city.service';
import {RecruitmentService} from '../../service/recruitment.service';
import {Company} from '../../model/company';
import {City} from '../../model/city';
import {Recruitment} from '../../model/recruitment';

@Component({
  selector: 'app-recruitment-list',
  templateUrl: './recruitment-list.component.html',
  styleUrls: ['./recruitment-list.component.css']
})
export class RecruitmentListComponent implements OnInit {
  recruitment: Recruitment[] = [];
  company: Company[] = [];
  city: City[] = [];

  constructor(private recruitmentService: RecruitmentService,
              private companyService: CompanyService,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.getAllRecruitment();
  }

  getAllRecruitment() {
    this.recruitmentService.getAll().subscribe(recruitment => {
      this.recruitment = recruitment;
    }, e => {
      console.log(e);
    });
  }
}
