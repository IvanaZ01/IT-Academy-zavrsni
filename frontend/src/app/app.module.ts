import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './services/auth-interceptor.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsComponent } from './components/pages/news/news.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { GroupsComponent } from './components/pages/admin/groups/groups.component';
import { TeachersComponent } from './components/pages/admin/teachers/teachers.component';
import { TestsComponent } from './components/pages/tests/tests.component';
import { TestResultsComponent } from './components/pages/test-results/test-results.component';
import { CardComponent } from './components/elements/card/card.component';
import { NgbdDropdownBasic } from './components/elements/dropdown/dropdown-basic.component';
import { CreateResultsComponent } from './components/pages/admin/create-results/create-results.component';
import { ResultComponent } from './components/pages/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    DashboardComponent,
    NavbarComponent,
    ContactComponent,
    UsersComponent,
    GroupsComponent,
    TeachersComponent,
    TestsComponent,
    TestResultsComponent,
    CardComponent,
    CreateResultsComponent,
    NgbdDropdownBasic,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ToastrService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
