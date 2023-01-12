import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  errorMessage: string = "";
  sub!: Subscription;
  
  constructor(private taskService: TaskService) { }
  
  tasks: Task[]=[];
  

  ngOnInit(): void {
   this.sub = this.taskService.getTasks().subscribe({
      next: tasks => this.tasks = tasks, 
      error: err => this.errorMessage = err
      
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
 
}
 