import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElikserDropdownComponent } from './elikser-dropdown.component';

describe('ElikserDropdownComponent', () => {
  let component: ElikserDropdownComponent;
  let fixture: ComponentFixture<ElikserDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElikserDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElikserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
