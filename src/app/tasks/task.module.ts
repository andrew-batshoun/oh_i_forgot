import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list.component';
import { AddTaskComponent } from './add/add-task.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    AddTaskComponent
  ],
  imports: [
   
    RouterModule.forChild([
      {
        path: '',
        component: TaskListComponent,
       }
    ]),
    SharedModule,
     
  ]
})
export class TaskModule { }
