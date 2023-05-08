import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from "@angular/router/testing";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './users/users.component';
import {Routes} from "@angular/router";
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'questions', component: QuestionsComponent},
  {path: 'login', component: LoginComponent},
  { path: 'users/:username', component: UsersComponent } // add this line
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    QuestionsComponent,
    LoginComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    RouterTestingModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
