//what you add here will be available to any component
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './shared/navbar.component';
import { StartComponent } from './start/start.component';
import {AppRoutingModule} from './shared/app.routing';
import { InterviewComponent } from './interview/interview.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { RecuitersComponent } from './recuiters/recuiters.component';
import { UsersComponent } from './users/users.component';
import { RolesListComponent } from './users/roles-list/roles-list.component';
import { RolesEditComponent } from './users/roles-edit/roles-edit.component';
import { SkillsEditComponent } from './skills/skills-edit/skills-edit.component';
import { RecuitersListComponent } from './recuiters/recuiters-list/recuiters-list.component';
import { RecuitersEditComponent } from './recuiters/recuiters-edit/recuiters-edit.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import { AdminComponentComponent } from './admin/admin-component/admin-component.component';
// import { AdminSharedComponent } from './admin/admin-shared/user.service';

const appRoutes : Routes =[
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent}, 
  {path: 'recuiters', component: RecuitersComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'interviews', component:InterviewComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SignUpComponent,
    LoginComponent,
    AdminMenuComponent,
    ErrorComponent,
    HomeComponent,
    NavComponent,
    StartComponent,
    InterviewComponent,
    HeaderComponent,
    SkillsComponent,
    SkillsListComponent,
    RecuitersComponent,
    UsersComponent,
    RolesListComponent,
    RolesEditComponent,
    SkillsEditComponent,
    RecuitersListComponent,
    RecuitersEditComponent,
    DepartmentEditComponent,
    DepartmentComponent,
    DepartmentListComponent,
    AdminComponentComponent
    // AdminSharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
