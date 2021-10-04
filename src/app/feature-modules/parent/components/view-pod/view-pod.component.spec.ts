import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPodComponent } from './view-pod.component';

describe('ViewPodComponent', () => {
  let component: ViewPodComponent;
  let fixture: ComponentFixture<ViewPodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
