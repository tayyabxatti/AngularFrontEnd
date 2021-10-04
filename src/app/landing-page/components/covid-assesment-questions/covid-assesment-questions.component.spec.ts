import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidAssesmentQuestionsComponent } from './covid-assesment-questions.component';

describe('CovidAssesmentQuestionsComponent', () => {
  let component: CovidAssesmentQuestionsComponent;
  let fixture: ComponentFixture<CovidAssesmentQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidAssesmentQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidAssesmentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
