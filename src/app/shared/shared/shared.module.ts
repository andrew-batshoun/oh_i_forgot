import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
