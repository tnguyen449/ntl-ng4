import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { BranchService } from './Services/Branch/branch.service';
import { EmployeeService } from './Services/Employee/employee.service';


import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { BranchesComponent } from './Components/branches/branches.component';
import { NavigationBarComponent } from './Partials/navigation-bar/navigation-bar.component';
import { BranchTableComponent } from './Partials/branch-table/branch-table.component';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap/dropdown/dropdown';
import { BolComponent } from './Components/bol/bol.component';
import { EmployeesComponent } from './Components/employees/employees.component';
import { BranchInfoComponent } from './Partials/branch-info/branch-info.component';
import { BranchMapComponent } from './Partials/branch-map/branch-map.component';
import { TrustedResourceUrlPipe } from './Pipes/Trusted-Resource-Url/trusted-resource-url.pipe';
import { ProvidedServicesComponent } from './Partials/provided-services/provided-services.component';
import { SearchBolComponent } from './Partials/search-bol/search-bol.component';
import { BranchModalComponent } from './Templates/Modals/branch-modal/branch-modal.component';
import { EmployeeModalComponent } from './Templates/Modals/employee-modal/employee-modal.component';

const ROUTES: Routes = [
  { path: 'trang-chu', component: MainComponent },
  { path: 'chi-nhanh', component: BranchesComponent },
  { path: 'nhan-vien', component: EmployeesComponent },
  { path: '**', redirectTo: '/trang-chu'}
];

@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    NavigationBarComponent,
    BranchTableComponent,
    BolComponent,
    MainComponent,
    EmployeesComponent,
    BranchInfoComponent,
    BranchMapComponent,
    TrustedResourceUrlPipe,
    ProvidedServicesComponent,
    SearchBolComponent,
    BranchModalComponent,
    EmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES, { enableTracing: true }),
    BrowserAnimationsModule
  ],
  providers: [NgbDropdown, BranchService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
