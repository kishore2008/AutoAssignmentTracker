import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddproductComponent } from './addproduct/addproduct.component';
import { CompanyComponent } from './company/company.component';
import { EditassignmentComponent } from './editassignment/editassignment.component';
import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    component:CompanyComponent,path:"company"
  },
  {
    component:LoginComponent,path:"login"
  },
  {
    component:LoginComponent,path:""
  },
  {
    component:EditassignmentComponent,path:"editassignment"
  },
  
  //   component:ProductComponent,path:"product",children:[
  //     {
  //       component:AddproductComponent,path:"create"
  //     },
  //     {
  //       component:AddproductComponent,path:"edit/:id"
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
