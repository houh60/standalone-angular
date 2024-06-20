import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../user/user.model';
import { Task } from './task/task.model';
import { TaskToAddComponent } from "./task-to-add/task-to-add.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [CommonModule, TaskComponent, TaskToAddComponent]
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) user!: User;
  addTask = false;
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u6',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
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
