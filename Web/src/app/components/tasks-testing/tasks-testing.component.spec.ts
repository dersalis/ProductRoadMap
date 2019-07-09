import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTestingComponent } from './tasks-testing.component';

describe('TasksTestingComponent', () => {
  let component: TasksTestingComponent;
  let fixture: ComponentFixture<TasksTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
