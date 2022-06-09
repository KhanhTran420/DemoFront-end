import {Component, OnInit} from '@angular/core';
import {City} from './model/city';
import {CompanyService} from './service/company.service';
import {CityService} from './service/city.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'module6demo';
  city: City[] = [];

  ngOnInit(): void {
  }
  constructor(private companyService: CompanyService,
              private cityService: CityService,
              private router: Router) {
    // this.getAllCity();
  }
  // getAllCity() {
  //   this.cityService.getAllCity().subscribe(city => {
  //     this.city = city;
  //   });
  // }
}
