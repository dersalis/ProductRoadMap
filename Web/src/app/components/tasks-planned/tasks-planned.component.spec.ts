import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksPlannedComponent } from './tasks-planned.component';

describe('TasksPlannedComponent', () => {
  let component: TasksPlannedComponent;
  let fixture: ComponentFixture<TasksPlannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksPlannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksPlannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
