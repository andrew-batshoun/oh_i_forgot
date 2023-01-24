import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AddTaskComponent } from './add/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../users/auth.guard';



@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'tasks',
        component: TaskListComponent,
        canActivate: [AuthGuard],
       }
    ])
  ]
})
export class TaskModule { }
