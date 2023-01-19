import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  userForm: FormGroup;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id:[],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  registerUser(): void{
    this.userService.registerUser(this.userForm.value).subscribe({
      next: ()=> this.redirect(),
      error: err => this.errorMessage = err
    });
  }

  redirect(){
    this.router.navigate(['login']);
  }

}
