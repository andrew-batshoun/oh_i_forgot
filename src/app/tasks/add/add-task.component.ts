import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
errorMessage: string = "";

  constructor(private  formBuilder: FormBuilder, private taskService: TaskService) { }
  taskForm: FormGroup;

  ngOnInit(): void {
   this.taskForm = this.formBuilder.group({
    id:[],
    description:['', Validators.required],
    dueDate: ['', Validators.required]
   });
  }

  

  saveTask(): void{
    this.taskService.saveTask(this.taskForm.value).subscribe({
      next: () => console.log('Saved task'),
      error: err => this.errorMessage = err
      
    });

  }

}
