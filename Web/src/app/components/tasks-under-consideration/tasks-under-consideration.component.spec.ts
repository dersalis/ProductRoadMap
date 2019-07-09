import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksUnderConsiderationComponent } from './tasks-under-consideration.component';

describe('TasksUnderConsiderationComponent', () => {
  let component: TasksUnderConsiderationComponent;
  let fixture: ComponentFixture<TasksUnderConsiderationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksUnderConsiderationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksUnderConsiderationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
