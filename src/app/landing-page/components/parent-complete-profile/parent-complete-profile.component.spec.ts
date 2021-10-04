import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCompleteProfileComponent } from './parent-complete-profile.component';

describe('ParentCompleteProfileComponent', () => {
  let component: ParentCompleteProfileComponent;
  let fixture: ComponentFixture<ParentCompleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentCompleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
