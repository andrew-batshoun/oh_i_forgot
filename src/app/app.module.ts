import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { TaskListComponent } from './tasks/task-list.component';
import { AddTaskComponent } from './tasks/add/add-task.component';
import { RegisterUsersComponent } from './users/register-users.component';
import { LoginUsersComponent } from './users/login-users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TaskListComponent,
    AddTaskComponent,
    RegisterUsersComponent,
    LoginUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tasks', component: TaskListComponent},
      {path: 'register', component: RegisterUsersComponent},
      {path: 'login', component: LoginUsersComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
