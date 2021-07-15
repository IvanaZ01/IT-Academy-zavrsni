import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './components/pages/admin/groups/groups.component';
import { TeachersComponent } from './components/pages/admin/teachers/teachers.component';
import { TestsComponent } from './components/pages/admin/tests/tests.component';
import { UsersComponent } from './components/pages/admin/users/users.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { NewsComponent } from './components/pages/news/news.component';
import { TestResultsComponent } from './components/pages/test-results/test-results.component';


const routes: Routes = [
  {
    path: '', component: NewsComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'test-results', component: TestResultsComponent
  },
  {
    path:'admin/user', component: UsersComponent
  },
  {
    path:'admin/teacher',component:TeachersComponent
  },
  {
    path:'admin/group',component:GroupsComponent
  },
  {
    path:'admin/test',component:TestsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
