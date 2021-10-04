import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCompleteProfileComponent } from './teacher-complete-profile.component';

describe('TeacherCompleteProfileComponent', () => {
  let component: TeacherCompleteProfileComponent;
  let fixture: ComponentFixture<TeacherCompleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCompleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
