import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { TaskToAddComponent } from "./task-to-add/task-to-add.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    TaskToAddComponent
  ],
  exports: [
    TasksComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class TaskModule {}
