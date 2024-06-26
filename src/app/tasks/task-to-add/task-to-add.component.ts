import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-to-add',
  templateUrl: './task-to-add.component.html',
  styleUrl: './task-to-add.component.css'
})
export class TaskToAddComponent {

  @Output() taskData = new EventEmitter();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskData.emit(form.value);
    } else {
      alert('Please fill up all the fields.')
    }
  }
}
