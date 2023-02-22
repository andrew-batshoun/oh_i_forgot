import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
;
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  lang;


  get isLoggedIn():boolean{
    return this.userService.isLoggedIn;
  }


  constructor(private userService: UserService,
              private router: Router, private translateService: TranslateService){
               this.translateService.setDefaultLang('en');
               this.translateService.use(localStorage.getItem('lang') || 'en')
              }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }


  logout(): void{
    this.userService.logout();
    this.router.navigateByUrl('/welcome');
  }

  changeLang(lang){
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
