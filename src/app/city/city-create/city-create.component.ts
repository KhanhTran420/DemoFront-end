import { Component, OnInit } from '@angular/core';
import {CityService} from '../../service/city.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {

  cityForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  constructor(private  cityService: CityService) { }

  ngOnInit() {
  }

  submit() {
    const city = this.cityForm.value;
    this.cityService.saveCity(city).subscribe(() =>{
      this.cityForm.reset();
      alert('success');
    }, e => {
      console.log(e);
    });
  }
}
