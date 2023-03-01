import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from './task';
import { TaskService } from './task.service';
import { faPen, faBan, faSave } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-new-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  errorMessage: string = '';
  sub: Subscription;
  newTask: Task;
  faPen = faPen;
  faBan = faBan;
  faFolder = faSave

  constructor(
    private formBuiler: FormBuilder,
    private taskService: TaskService
  ) {}

  editForm: FormGroup;

  tasks: Task[] = [];

  ngOnInit(): void {
    this.editForm = this.formBuiler.group({
      id:[],
      description:[''],
      dueDate: ['']

    });

    this.sub = this.taskService.getTasks().subscribe({
      next: (tasks) => (this.tasks = tasks),
      error: (err) => (this.errorMessage = err),
    });
  }

  showRemove(event: any, task: Task): void {
    this.tasks.forEach((element) => {
      element.checked = false;
    });
    if (event.currentTarget.checked) {
      task.checked = true;
    }
  }

  deleteTask(id: number): void {
    let string = '';
    if (localStorage.getItem('lang') === 'de') {
      string = 'Sind Sie sicher, dass Sie das löschen möchten?';
    } else if (localStorage.getItem('lang') === 'es') {
      string = '¿Estás seguro de que quieres eliminar?';
    } else {
      string = 'Are you sure you want to delete?';
    }
    if (confirm(string)) {
      this.taskService.deleteTask(id).subscribe({
        next: () => this.reloadPage(),
        error: (err) => (this.errorMessage = err),
      });
    }
  }

  editing(task: any): void {
    this.tasks.forEach((element) => {
      element.isEdit = false;
    });
    task.isEdit = true;
    if(task.isEdit){
      this.editForm.patchValue(task);
    }
    
  }

  editSubmit(task: Task): void {
    let dateEdit = new Date(this.editForm.get('dueDate').value);
    let year: number = dateEdit.getFullYear();
    let month: number = +dateEdit.getMonth().toString().padStart(2, '0');
    let day: number = +(dateEdit.getDate() + 1).toString().padStart(2, '0');

    this.newTask = {
      id: this.editForm.get('id').value,
      description: this.editForm.get('description').value,
      dueDate: new Date(year, month, day),
      isEdit: task.isEdit,
      checked: task.checked,
    };

    this.taskService.updateTask(this.newTask).subscribe({
      next: () => this.reloadPage(),
      error: (err) => (this.errorMessage = err),
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
