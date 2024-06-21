import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { TaskService } from './tasks/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
