import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddproductComponent } from './addproduct/addproduct.component';
import { CompanyComponent } from './company/company.component';
import { EditassignmentComponent } from './editassignment/editassignment.component';
import { LoginComponent } from './login/login.component';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';
// import { ProductComponent } from './product/product.component';

const routes: Routes = [
  
  {
    component:LoginComponent,path:"login",pathMatch:'full'
  },
  {
    component:CompanyComponent,path:"company",pathMatch:'full'
  },
  {
    component:EditassignmentComponent,path:"editassignment",pathMatch:'full'
  },
  {
    path:"viewassignment",component:ViewAssignmentComponent
  },
  {
    component:LoginComponent,path:"",pathMatch:'full'
  }
  
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
