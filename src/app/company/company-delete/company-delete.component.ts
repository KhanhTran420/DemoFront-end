import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../../service/company.service';
import {CityService} from '../../service/city.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent implements OnInit {

  companyForm: FormGroup = new FormGroup({
    id: new FormControl(),
    codeCompany: new FormControl(),
    name: new FormControl(),
    description: new FormControl()
  });
  id: number;

  constructor(private companyService: CompanyService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getDeleteById(this.id);
    });
  }

  ngOnInit() {
  }

  getDeleteById(id: number) {
    return this.companyService.findById(id).subscribe(company => {
      this.companyForm = new FormGroup({
        codeCompany: new FormControl(company.codeCompany),
        name: new FormControl(company.name),
        description: new FormControl(company.description),
      });
    });
  }

  deleteCompany(id: number) {
    this.companyService.deleteCompany(id).subscribe(() => {
      this.router.navigate(['/company/list']);
    }, e => {
      console.log(e);
    });
  }
}
