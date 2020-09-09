import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import{HttpClientModule} from   '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    EmployeeComponent,
    GenderPipePipe,
    AboutUsComponent,
    EmployeeListComponent,
    ReactiveFormComponent,
    UserComponent,
    AdduserComponent,
    NgclassdemoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
