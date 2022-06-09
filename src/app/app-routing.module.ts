import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
   path: 'company',
  loadChildren: () => import('./company/company.module').then(module => module.CompanyModule)
},
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(module => module.CityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
