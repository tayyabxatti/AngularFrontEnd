import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePodsComponent } from './manage-pods.component';

describe('ManagePodsComponent', () => {
  let component: ManagePodsComponent;
  let fixture: ComponentFixture<ManagePodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
