import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksLaunchedComponent } from './tasks-launched.component';

describe('TasksLaunchedComponent', () => {
  let component: TasksLaunchedComponent;
  let fixture: ComponentFixture<TasksLaunchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksLaunchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksLaunchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
