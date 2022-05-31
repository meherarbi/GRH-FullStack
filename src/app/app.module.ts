import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlistuserComponent } from './components/adminlistuser/adminlistuser.component';
import { AdminlistinformationComponent } from './components/adminlistinformation/adminlistinformation.component';
import { AdminlistconsultantComponent } from './components/adminlistconsultant/adminlistconsultant.component';
import { AdminlistcandidatComponent } from './components/adminlistcandidat/adminlistcandidat.component';
import { AdminlistfeuilletempComponent } from './components/adminlistfeuilletemp/adminlistfeuilletemp.component';
import { AdminlistevaluationComponent } from './components/adminlistevaluation/adminlistevaluation.component';
import { AdminlistperiodeabsenceComponent } from './components/adminlistperiodeabsence/adminlistperiodeabsence.component';
import { EmployelistuserComponent } from './components/employelistuser/employelistuser.component';
import { EmployelistinformationComponent } from './components/employelistinformation/employelistinformation.component';
import { EmployelistconsultantComponent } from './components/employelistconsultant/employelistconsultant.component';
import { EmployelistcandidatComponent } from './components/employelistcandidat/employelistcandidat.component';
import { EmployelistfeuilletempComponent } from './components/employelistfeuilletemp/employelistfeuilletemp.component';
import { EmployelistevaluationComponent } from './components/employelistevaluation/employelistevaluation.component';
import { EmployelistperiodeabsenceComponent } from './components/employelistperiodeabsence/employelistperiodeabsence.component';
import { ServicegrhlistuserComponent } from './components/servicegrhlistuser/servicegrhlistuser.component';
import { ServicegrhlistinformationComponent } from './components/servicegrhlistinformation/servicegrhlistinformation.component';
import { ServicegrhlistconsultantComponent } from './components/servicegrhlistconsultant/servicegrhlistconsultant.component';
import { ServicegrhlistcandidatComponent } from './components/servicegrhlistcandidat/servicegrhlistcandidat.component';
import { ServicegrhlistfeuilletempComponent } from './components/servicegrhlistfeuilletemp/servicegrhlistfeuilletemp.component';
import { ServicegrhlistevaluationComponent } from './components/servicegrhlistevaluation/servicegrhlistevaluation.component';
import { ServicegrhlistperiodeabsenceComponent } from './components/servicegrhlistperiodeabsence/servicegrhlistperiodeabsence.component';
import { ServicegrhedituserComponent } from './components/servicegrhedituser/servicegrhedituser.component';
import { ServicegrheditinformationComponent } from './components/servicegrheditinformation/servicegrheditinformation.component';
import { ServicegrheditconsultantComponent } from './components/servicegrheditconsultant/servicegrheditconsultant.component';
import { ServicegrheditcandidatComponent } from './components/servicegrheditcandidat/servicegrheditcandidat.component';
import { ServicegrheditfeuilletempComponent } from './components/servicegrheditfeuilletemp/servicegrheditfeuilletemp.component';
import { ServicegrheditevaluationComponent } from './components/servicegrheditevaluation/servicegrheditevaluation.component';
import { ServicegrheditperiodeabsenceComponent } from './components/servicegrheditperiodeabsence/servicegrheditperiodeabsence.component';
import { EmployeedituserComponent } from './components/employeedituser/employeedituser.component';
import { EmployeeditinformationComponent } from './components/employeeditinformation/employeeditinformation.component';
import { EmployeeditconsultantComponent } from './components/employeeditconsultant/employeeditconsultant.component';
import { EmployeeditcandidatComponent } from './components/employeeditcandidat/employeeditcandidat.component';
import { EmployeeditfeuilletempComponent } from './components/employeeditfeuilletemp/employeeditfeuilletemp.component';
import { EmployeeditevaluationComponent } from './components/employeeditevaluation/employeeditevaluation.component';
import { EmployeeditperiodeabsenceComponent } from './components/employeeditperiodeabsence/employeeditperiodeabsence.component';
import { AdminedituserComponent } from './components/adminedituser/adminedituser.component';
import { AdmineditinformationComponent } from './components/admineditinformation/admineditinformation.component';
import { AdmineditconsultantComponent } from './components/admineditconsultant/admineditconsultant.component';
import { AdmineditcandidatComponent } from './components/admineditcandidat/admineditcandidat.component';
import { AdmineditfeuilletempComponent } from './components/admineditfeuilletemp/admineditfeuilletemp.component';
import { AdmineditevaluationComponent } from './components/admineditevaluation/admineditevaluation.component';
import { AdmineditperiodeabsenceComponent } from './components/admineditperiodeabsence/admineditperiodeabsence.component';
import { AdmincreateuserComponent } from './components/admincreateuser/admincreateuser.component';
import { AdmincreateinformationComponent } from './components/admincreateinformation/admincreateinformation.component';
import { AdmincreateconsultantComponent } from './components/admincreateconsultant/admincreateconsultant.component';
import { AdmincreatecandidatComponent } from './components/admincreatecandidat/admincreatecandidat.component';
import { AdmincreatefeuilletempComponent } from './components/admincreatefeuilletemp/admincreatefeuilletemp.component';
import { AdmincreateevaluationComponent } from './components/admincreateevaluation/admincreateevaluation.component';
import { AdmincreateperiodeabsenceComponent } from './components/admincreateperiodeabsence/admincreateperiodeabsence.component';
import { EmployecreateuserComponent } from './components/employecreateuser/employecreateuser.component';
import { EmployecreateinformationComponent } from './components/employecreateinformation/employecreateinformation.component';
import { EmployecreateconsultantComponent } from './components/employecreateconsultant/employecreateconsultant.component';
import { EmployecreatecandidatComponent } from './components/employecreatecandidat/employecreatecandidat.component';
import { EmployecreatefeuilletempComponent } from './components/employecreatefeuilletemp/employecreatefeuilletemp.component';
import { EmployecreateevaluationComponent } from './components/employecreateevaluation/employecreateevaluation.component';
import { EmployecreateperiodeabsenceComponent } from './components/employecreateperiodeabsence/employecreateperiodeabsence.component';
import { ServicegrhcreateuserComponent } from './components/servicegrhcreateuser/servicegrhcreateuser.component';
import { ServicegrhcreateinformationComponent } from './components/servicegrhcreateinformation/servicegrhcreateinformation.component';
import { ServicegrhcreateconsultantComponent } from './components/servicegrhcreateconsultant/servicegrhcreateconsultant.component';
import { ServicegrhcreatecandidatComponent } from './components/servicegrhcreatecandidat/servicegrhcreatecandidat.component';
import { ServicegrhcreatefeuilletempComponent } from './components/servicegrhcreatefeuilletemp/servicegrhcreatefeuilletemp.component';
import { ServicegrhcreateevaluationComponent } from './components/servicegrhcreateevaluation/servicegrhcreateevaluation.component';
import { ServicegrhcreateperiodeabsenceComponent } from './components/servicegrhcreateperiodeabsence/servicegrhcreateperiodeabsence.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { AdminmenuComponent } from './components/adminmenu/adminmenu.component';
import { EmployeloginComponent } from './components/employelogin/employelogin.component';
import { EmployeheaderComponent } from './components/employeheader/employeheader.component';
import { EmployefooterComponent } from './components/employefooter/employefooter.component';
import { EmployemenuComponent } from './components/employemenu/employemenu.component';
import { ServicegrhloginComponent } from './components/servicegrhlogin/servicegrhlogin.component';
import { ServicegrhheaderComponent } from './components/servicegrhheader/servicegrhheader.component';
import { ServicegrhfooterComponent } from './components/servicegrhfooter/servicegrhfooter.component';
import { ServicegrhmenuComponent } from './components/servicegrhmenu/servicegrhmenu.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlistuserComponent,
    AdminlistinformationComponent,
    AdminlistconsultantComponent,
    AdminlistcandidatComponent,
    AdminlistfeuilletempComponent,
    AdminlistevaluationComponent,
    AdminlistperiodeabsenceComponent,
    EmployelistuserComponent,
    EmployelistinformationComponent,
    EmployelistconsultantComponent,
    EmployelistcandidatComponent,
    EmployelistfeuilletempComponent,
    EmployelistevaluationComponent,
    EmployelistperiodeabsenceComponent,
    ServicegrhlistuserComponent,
    ServicegrhlistinformationComponent,
    ServicegrhlistconsultantComponent,
    ServicegrhlistcandidatComponent,
    ServicegrhlistfeuilletempComponent,
    ServicegrhlistevaluationComponent,
    ServicegrhlistperiodeabsenceComponent,
    ServicegrhedituserComponent,
    ServicegrheditinformationComponent,
    ServicegrheditconsultantComponent,
    ServicegrheditcandidatComponent,
    ServicegrheditfeuilletempComponent,
    ServicegrheditevaluationComponent,
    ServicegrheditperiodeabsenceComponent,
    EmployeedituserComponent,
    EmployeeditinformationComponent,
    EmployeeditconsultantComponent,
    EmployeeditcandidatComponent,
    EmployeeditfeuilletempComponent,
    EmployeeditevaluationComponent,
    EmployeeditperiodeabsenceComponent,
    AdminedituserComponent,
    AdmineditinformationComponent,
    AdmineditconsultantComponent,
    AdmineditcandidatComponent,
    AdmineditfeuilletempComponent,
    AdmineditevaluationComponent,
    AdmineditperiodeabsenceComponent,
    AdmincreateuserComponent,
    AdmincreateinformationComponent,
    AdmincreateconsultantComponent,
    AdmincreatecandidatComponent,
    AdmincreatefeuilletempComponent,
    AdmincreateevaluationComponent,
    AdmincreateperiodeabsenceComponent,
    EmployecreateuserComponent,
    EmployecreateinformationComponent,
    EmployecreateconsultantComponent,
    EmployecreatecandidatComponent,
    EmployecreatefeuilletempComponent,
    EmployecreateevaluationComponent,
    EmployecreateperiodeabsenceComponent,
    ServicegrhcreateuserComponent,
    ServicegrhcreateinformationComponent,
    ServicegrhcreateconsultantComponent,
    ServicegrhcreatecandidatComponent,
    ServicegrhcreatefeuilletempComponent,
    ServicegrhcreateevaluationComponent,
    ServicegrhcreateperiodeabsenceComponent,
    AdminloginComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    AdminmenuComponent,
    EmployeloginComponent,
    EmployeheaderComponent,
    EmployefooterComponent,
    EmployemenuComponent,
    ServicegrhloginComponent,
    ServicegrhheaderComponent,
    ServicegrhfooterComponent,
    ServicegrhmenuComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
