import { Component, OnInit } from '@angular/core';
import {Company} from '../../model/company';
import {CompanyService} from '../../service/company.service';
import {CityService} from '../../service/city.service';
import {City} from '../../model/city';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  company: Company[] = [];
  city: City[] = [];
  constructor(private companyService: CompanyService,
              private cityService: CityService ) { }

  ngOnInit() {
    this.getAll();
    this.getAllCity();
  }
 getAll() {
    this.companyService.getAll().subscribe(company => {
      this.company = company;
    }, e => {
      console.log(e);
    });
 }
 getAllCity() {
    this.cityService.getAllCity().subscribe(city => {
      this.city = city;
    });
 }
}
