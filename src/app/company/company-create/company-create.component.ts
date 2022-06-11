import {Component, OnInit} from '@angular/core';
import {Company} from '../../model/company';
import {City} from '../../model/city';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../service/company.service';
import {CityService} from '../../service/city.service';
import {Router} from '@angular/router';
import {StatusCompany} from '../../model/status-company';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  userFile: any = File;
  company: Company[] = [];
  city: City[] = [];
  companyForm: FormGroup = new FormGroup({
    codeCompany: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    avatar: new FormControl(),
    description: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    emplployeeQuantity: new FormControl('', [Validators.required]),
    city: new FormControl(),
    linkMap: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    // statusCompany: new FormControl('')
  });
  statusActive = Object.values(StatusCompany.ACTIVE);
  statusLock = Object.values(StatusCompany.LOCK);
  statusCompanies = Object.values(StatusCompany);
  constructor(private companyService: CompanyService,
              private cityService: CityService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCity();
  }
  onSelectFile(event: Event) {
    // @ts-ignore
    this.userFile = event.target.files[0];
  }
  submit() {
    if (this.companyForm.invalid) {
      return;
    } else {
      const company = new FormData();
      company.append('codeCompany', this.companyForm.get('codeCompany').value);
      company.append('name', this.companyForm.get('name').value);
      company.append('avatar', this.userFile);
      company.append('description', this.companyForm.get('description').value);
      company.append('address', this.companyForm.get('address').value);
      company.append('emplployeeQuantity', this.companyForm.get('emplployeeQuantity').value);
      company.append('city', this.companyForm.get('city').value);
      company.append('linkMap', this.companyForm.get('linkMap').value);
      company.append('phone', this.companyForm.get('phone').value);
      // company.append('statusCompany', this.companyForm.get('statusCompany').value);
      this.companyService.saveCompany(company).subscribe(() => {
        alert('Success');
      });
      this.companyForm.reset();
    }
  }
  get codeCompanyControl() {
    return this.companyForm.get('codeCompany');
  }
  get nameControl() {
    return this.companyForm.get('name');
  }
  get descriptionControl() {
    return this.companyForm.get('description');
  }
  get addressControl() {
    return this.companyForm.get('address');
  }
  get emplployeeQuantityControl() {
    return this.companyForm.get('emplployeeQuantity');
  }
  get linkMapControl() {
    return this.companyForm.get('linkMap');
  }
  get phoneControl() {
    return this.companyForm.get('phone');
  }
  // get statusCompanyControl() {
  //   return this.companyForm.get('statusCompany');
  // }

  getAllCity() {
    this.cityService.getAllCity().subscribe((city) => {
        this.city = city;
      }, (error) => {
        alert(error);
      }
    );
  }

}
