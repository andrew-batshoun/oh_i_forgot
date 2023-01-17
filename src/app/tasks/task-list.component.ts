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

  deleteTask(id: number): void {
    if(confirm('Are you sure you want to delete?')){
      this.taskService.deleteTask(id).subscribe({
        next: () => console.log(`Task ${id} has been deleted`),
        error: err => this.errorMessage = err
      });
    }
    
  }
 
}
 