import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTask } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  errorMessage: string = '';
  newTask: NewTask;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}
  taskForm: FormGroup;

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: [],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  saveTask(): void {
    console.log(this.taskForm.get('dueDate').value);
    let dateEdit = new Date(this.taskForm.get('dueDate').value);
    let year: number = dateEdit.getFullYear();
    let month: number = +dateEdit.getMonth().toString().padStart(2, '0');
    let day: number = +(dateEdit.getDate() + 1).toString().padStart(2, '0');

    this.newTask = {
      id: 0,
      description: this.taskForm.get('description').value,
      dueDate: new Date(year, month, day),
    };
    this.taskService.saveTask(this.newTask).subscribe({
      next: () => this.reloadPage(),
      error: (err) => (this.errorMessage = err),
    });
  }
  reloadPage() {
    window.location.reload();
  }

  reset() {
    this.taskForm.reset();
  }
}
