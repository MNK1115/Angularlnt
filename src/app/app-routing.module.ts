import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';

 
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'contact', component :ContactUsComponent},
  {path: 'emp',component: EmployeeComponent},
  {path: 'employeeList',component: EmployeeListComponent},
  {path: 'reactiveform',component: ReactiveFormComponent},
  {path: 'user', component: UserComponent},
  {path:'adduser', component:AdduserComponent},
  {path:'ngclassdemo', component:NgclassdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
