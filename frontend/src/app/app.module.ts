import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsComponent } from './components/pages/news/news.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavbarComponent } from './components/elements/navbar/navbar.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { GroupsComponent } from './components/pages/admin/groups/groups.component';
import { TeachersComponent } from './components/pages/admin/teachers/teachers.component';
import { TestsComponent } from './components/pages/admin/tests/tests.component';
import { TestResultsComponent } from './components/pages/test-results/test-results.component';

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
    TestResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
