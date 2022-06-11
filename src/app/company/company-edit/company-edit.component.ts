import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {City} from '../../model/city';
import {CompanyService} from '../../service/company.service';
import {CityService} from '../../service/city.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StatusCompany} from '../../model/status-company';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  selectedFile = new File(['none'], 'filename.jpg');
  companyForm: FormGroup = new FormGroup({
    id: new FormControl(),
    codeCompany: new FormControl(),
    name: new FormControl(),
    avatar: new FormControl(),
    description: new FormControl(),
    address: new FormControl(),
    emplployeeQuantity: new FormControl(),
    city: new FormControl(),
    linkMap: new FormControl(),
    phone: new FormControl(),
    // statusCompany: new FormControl()
  });
  id: number;
  city: City[] = [];
  avatar = null;
  // statusCompanies = Object.values(StatusCompany);
  constructor(private companyService: CompanyService,
              private cityService: CityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.id = +paramMap.get('id');
      this.getCompanyById(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCity();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  private getCompanyById(id: number) {
    return this.companyService.findById(id).subscribe((company) => {
      this.avatar = company.avatar;
      this.companyForm = new FormGroup({
        id: new FormControl(company.id),
        codeCompany: new FormControl(company.codeCompany),
        name: new FormControl(company.name),
        avatar: new FormControl(),
        description: new FormControl(company.description),
        address: new FormControl(company.address),
        emplployeeQuantity: new FormControl(company.emplployeeQuantity),
        city: new FormControl(company.city.id),
        linkMap: new FormControl(company.linkMap),
        phone: new FormControl(company.phone),
        // statusCompany: new FormControl(company.statusCompany)
      });
    });
  }

  editCompany(id: number) {
    if (this.companyForm.invalid) {
      return;
    } else {
      const company: FormData = new FormData();
      company.append('id', this.companyForm.get('id').value);
      company.append('codeCompany', this.companyForm.get('codeCompany').value);
      company.append('name', this.companyForm.get('name').value);
      company.append('avatar', this.selectedFile);
      company.append('description', this.companyForm.get('description').value);
      company.append('address', this.companyForm.get('address').value);
      company.append('emplployeeQuantity', this.companyForm.get('emplployeeQuantity').value);
      company.append('city', this.companyForm.get('city').value);
      company.append('linkMap', this.companyForm.get('linkMap').value);
      company.append('phone', this.companyForm.get('phone').value);
      // company.append('statusCompany', this.companyForm.get('statusCompany').value);
      this.companyService.editCompany(id, company).subscribe(() => {
        this.router.navigate(['/company/list']);
        alert('sua thanh cong');
      });
    }
  }

  private getAllCity() {
    this.cityService.getAllCity().subscribe((city) => {
      this.city = city;
    }, e => {
      alert(e);
    });
  }

  // get codeCompanyControl() {
  //   return this.companyForm.get('codeCompany');
  // }
  // get nameControl() {
  //   return this.companyForm.get('name');
  // }
  // get descriptionControl() {
  //   return this.companyForm.get('description');
  // }
  // get addressControl() {
  //   return this.companyForm.get('address');
  // }
  // get emplployeeQuantityControl() {
  //   return this.companyForm.get('emplployeeQuantity');
  // }
  // get linkMapControl() {
  //   return this.companyForm.get('linkMap');
  // }
  // get phoneControl() {
  //   return this.companyForm.get('phone');
  // }
  // get statusCompanyControl() {
  //   return this.companyForm.get('statusCompany');
  // }
}

