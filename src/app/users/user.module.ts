import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from './login-users.component';
import { RegisterUsersComponent } from './register-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginUsersComponent,
    RegisterUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'register', component: RegisterUsersComponent},
      {path: 'login', component: LoginUsersComponent}
    ])
  ]
})
export class UserModule { }
