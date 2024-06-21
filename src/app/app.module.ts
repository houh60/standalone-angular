import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { TaskToAddComponent } from "./tasks/task-to-add/task-to-add.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskToAddComponent,
    CardComponent,
    TaskComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
