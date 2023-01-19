import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PageTitle = 'Oh I forgot';
  get isLoggedIn():boolean{
    return this.userService.isLoggedIn;
  }


  constructor(private userService: UserService,
              private router: Router){}

  logout(): void{
    this.userService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
