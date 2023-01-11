import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  showRemove = false;

  tasks: Task[]=[
    {
      "id": 1,
      "description": "Get Groceries",
      "date": new Date(2022, 12, 1)
    },

    {
      "id": 1,
      "description": "Walk The dog",
      "date": new Date('') 
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  checkedBox(){
    this.showRemove = !this.showRemove;
  }
 
}
