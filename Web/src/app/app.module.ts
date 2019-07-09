import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TaskBoxComponent } from './components/task-box/task-box.component';
import { TasksUnderConsiderationComponent } from './components/tasks-under-consideration/tasks-under-consideration.component';
import { TasksPlannedComponent } from './components/tasks-planned/tasks-planned.component';
import { TasksInProgressComponent } from './components/tasks-in-progress/tasks-in-progress.component';
import { TasksTestingComponent } from './components/tasks-testing/tasks-testing.component';
import { TasksLaunchedComponent } from './components/tasks-launched/tasks-launched.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    TaskBoxComponent,
    TasksUnderConsiderationComponent,
    TasksPlannedComponent,
    TasksInProgressComponent,
    TasksTestingComponent,
    TasksLaunchedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
