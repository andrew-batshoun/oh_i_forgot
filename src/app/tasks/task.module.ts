import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AddTaskComponent } from './add/add-task.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: 'tasks', component: TaskListComponent}
    ])
  ]
})
export class TaskModule { }
