import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerSubmission, CovidAssesmentQuestions, CovidAssesmentQuestionsAnswers } from 'src/app/classes/covid-assesment-questions/covid-assesment-questions';
import { CovidAssesmentService } from 'src/app/services/covid-assesment-questions/covid-assesment.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';
// import { ProfileDataService, UtilityService } from 'src/app/shared/utility';

declare var $:any;

@Component({
  selector: 'app-covid-assesment-questions',
  templateUrl: './covid-assesment-questions.component.html',
  styleUrls: ['./covid-assesment-questions.component.css']
})
export class CovidAssesmentQuestionsComponent implements OnInit {
  Lst_covid_assesment_questions:CovidAssesmentQuestions[] ;
  lst_covid_assesment_answers:CovidAssesmentQuestionsAnswers[];
  obj_covid_answer:CovidAssesmentQuestionsAnswers;
  defaultChoiceFalse:boolean=false;
  defaultChoiceTrue:boolean=true;

  lst_answer:AnswerSubmission[];
  obj_answer:AnswerSubmission;
  constructor(public _UtilityService: UtilityService,private _router:Router,public _assesment_question:CovidAssesmentService,public userprofile:ProfileDataService) { 
    this.Lst_covid_assesment_questions=[];
    this.lst_covid_assesment_answers=[];
    this.obj_covid_answer=new CovidAssesmentQuestionsAnswers();
    this.lst_answer=[];
    this.obj_answer=new AnswerSubmission();
  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this._assesment_question.getCovidAssesmentQuestions().subscribe(data=>{
      if(data){
        this.Lst_covid_assesment_questions=data;
        this.setModalValues(this.Lst_covid_assesment_questions);
      }
      
    })
  }

  setModalValues(lst_question:any){
    for(const item of lst_question)
    {
      this.obj_answer.questionId=parseInt(item.covid_Question_ID);
      this.obj_answer.question_description=item.question_Description;
      this.obj_answer.check_yes='no';
      // this.obj_answer.check_no='true';
      this.obj_answer.user_id=parseInt(this.userprofile.getUserId);
      this.obj_answer.no_id='no'+item.covid_Question_ID;
      this.obj_answer.yes_id='yes'+item.covid_Question_ID;
      this.lst_answer.push(this.obj_answer);
      this.obj_answer=new AnswerSubmission();
    }
    // console.log(this.lst_answer);
  }

  OnSumbit(){
    debugger;
    console.log(this.lst_answer);
    this._assesment_question.postCovidAssesmentAnswers(this.lst_answer).subscribe(data=>{
      if(data.success){
    this._UtilityService.displayNotification(data.message, 'success');
    this.navigateToUrl(this.userprofile.getRole);    
    console.log(data.message);
      }else{
    this._UtilityService.displayNotification(data.message, 'error');
        console.log(data.message);

      }
    })
  }

  public navigateToUrl(role:string)
  {
    this._UtilityService.displayNotification('logged in successfully', 'success');
    
    if(role=="Admin")
    {
      this._router.navigate(["admin/dashboard"]);
    }
    if(role=="Teacher")
    {
      this._router.navigate(["teacher/dashboard"]);
    }
    if(role=="Parent")
    {
      this._router.navigate(["parent/dashboard"]);
    }
    if(role=="Student")
    {
      this._router.navigate(["student/dashboard"]);
    }

  }

}
