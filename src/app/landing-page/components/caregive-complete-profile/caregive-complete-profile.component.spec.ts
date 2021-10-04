import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiveCompleteProfileComponent } from './caregive-complete-profile.component';

describe('CaregiveCompleteProfileComponent', () => {
  let component: CaregiveCompleteProfileComponent;
  let fixture: ComponentFixture<CaregiveCompleteProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiveCompleteProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiveCompleteProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
