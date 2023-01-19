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
  sub: Subscription;
   
   
  
  
  constructor(private taskService: TaskService) { }
  
  tasks: Task[]=[];
  

  ngOnInit(): void {
   this.sub = this.taskService.getTasks().subscribe({
      next: tasks => this.tasks = tasks, 
      error: err => this.errorMessage = err
      
    });
  }

  showRemove(event: any, task:Task): void{
    this.tasks.forEach(element => {
      element.checked = false;
      
    });
    if(event.currentTarget.checked){
      task.checked = true;
    }
  }

  deleteTask(id: number): void {
    if(confirm('Are you sure you want to delete?')){
      this.taskService.deleteTask(id).subscribe({
        next: () => this.reloadPage(),
        error: err => this.errorMessage = err
      });
    }
    
  }

  editing(task: any): void{
  this.tasks.forEach(element => {
    element.isEdit = false; 
  });
  task.isEdit = true; 
  }

  editSubmit(task:Task):void{
    this.taskService.updateTask(task).subscribe({
      next: () => this.reloadPage(),
      error: err => this.errorMessage = err
      
    });
  }

  reloadPage() {
    window.location.reload();
 }
  
 
}
 