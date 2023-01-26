import { NgModule } from '@angular/core';
import { LoginUsersComponent } from './login-users.component';
import { RegisterUsersComponent } from './register-users.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    LoginUsersComponent,
    RegisterUsersComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'register', component: RegisterUsersComponent},
      {path: 'login', component: LoginUsersComponent}
    ]),
    SharedModule
  ]
})
export class UserModule { }
