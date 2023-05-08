import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {QuestionsComponent} from "./questions/questions.component";
import {LoginComponent} from "./login/login.component";
import { UsersComponent } from './users/users.component';
import {RouterTestingModule} from "@angular/router/testing";

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'questions', component: QuestionsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'users', component: UsersComponent } // add this line
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  RouterModule.forRoot([])],

  exports: [RouterModule, RouterTestingModule]
})
export class AppRoutingModule { }
