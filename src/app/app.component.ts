import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./tasks/tasks.component";
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, CommonModule, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  user: any;
  selectedUserId!: string;

  constructor(private taskService: TaskService) {}

  onSelectUser(id: string) {
    this.taskService.taskInitialized.next(false);
    this.selectedUserId = id;
    this.user = this.users.find(user => user.id === id)!;
  }
}
