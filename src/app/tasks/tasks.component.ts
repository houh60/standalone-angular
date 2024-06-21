import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { Task } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) user!: User;
  addTask = false;
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.taskService.taskInitialized.subscribe(
      addTaskInitialize => this.addTask = addTaskInitialize as boolean
    );
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onAddTask(event: any) {
    const id = new Date().getTime().toString();
    const task: Task = {
      id: id,
      userId: this.user.id,
      title: event.title,
      summary: event.summary,
      dueDate: event.dueDate
    }
    this.tasks.push(task);
    this.addTask = false;
  }
}
