import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksUnderConsiderationComponent } from './components/tasks-under-consideration/tasks-under-consideration.component';
import { TasksPlannedComponent } from './components/tasks-planned/tasks-planned.component';
import { TasksInProgressComponent } from './components/tasks-in-progress/tasks-in-progress.component';
import { TasksTestingComponent } from './components/tasks-testing/tasks-testing.component';
import { TasksLaunchedComponent } from './components/tasks-launched/tasks-launched.component';

const routes: Routes = [
  { path: '', redirectTo: 'under-consideration', pathMatch: 'full'},
  { path: 'under-consideration', component: TasksUnderConsiderationComponent},
  { path: 'planned', component: TasksPlannedComponent},
  { path: 'in-progress', component: TasksInProgressComponent},
  { path: 'testing', component: TasksTestingComponent},
  { path: 'launched', component: TasksLaunchedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
