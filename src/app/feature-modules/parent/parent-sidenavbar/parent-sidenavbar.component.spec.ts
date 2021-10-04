import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSidenavbarComponent } from './parent-sidenavbar.component';

describe('ParentSidenavbarComponent', () => {
  let component: ParentSidenavbarComponent;
  let fixture: ComponentFixture<ParentSidenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSidenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
