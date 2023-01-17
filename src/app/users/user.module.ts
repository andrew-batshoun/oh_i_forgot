import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUsersComponent } from './login-users.component';
import { RegisterUsersComponent } from './register-users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginUsersComponent,
    RegisterUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'register', component: RegisterUsersComponent},
      {path: 'login', component: LoginUsersComponent}
    ])
  ]
})
export class UserModule { }
