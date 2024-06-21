import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
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

  taskInitialized = new Subject();
  constructor() {}

  getTasks() {
    return this.tasks;
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: any, userId: string) {
    const id = new Date().getTime().toString();
    const task: Task = {
      id: id,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    }
    this.tasks.push(task);
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
