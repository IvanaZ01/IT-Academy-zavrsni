import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/pages/admin/groups/groups.component';
import { TeachersComponent } from './components/pages/admin/teachers/teachers.component';
import { TestsComponent } from './components/pages/tests/tests.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsComponent } from './components/pages/news/news.component';
import { TestResultsComponent } from './components/pages/test-results/test-results.component';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AuthGuardService } from './services/auth-guard.service';
import { CreateResultsComponent } from './components/pages/admin/create-results/create-results.component';
import { ResultComponent } from './components/pages/result/result.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: NewsComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,  canActivate: [ AuthGuardService ]
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'test-results', component: TestResultsComponent,  canActivate: [ AuthGuardService ]
  },
  {
    path:'test', component: TestsComponent,  canActivate: [ AuthGuardService ]
  },
  {
    path:'result', component: ResultComponent,  canActivate: [ AuthGuardService ]
  },
  {
    path:'admin/user', component: UsersComponent, canActivate: [ AuthGuardAdmin ]
  },
  {
    path:'admin/teacher',component:TeachersComponent, canActivate: [ AuthGuardAdmin ]
  },
  {
    path:'admin/group',component:GroupsComponent, canActivate: [ AuthGuardAdmin ]
  },
  {
    path:'admin/create-results',component: CreateResultsComponent, canActivate: [ AuthGuardAdmin ]
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
