import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
errorMessage: string = "";
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  loginUser(): void{
    this.userService.loginUser(this.loginForm.value).subscribe({
      next: () => this.redirect(),
      error: err => this.errorMessage = err
    });
  }

  redirect(){
    this.router.navigate(['tasks']);
  }

}
