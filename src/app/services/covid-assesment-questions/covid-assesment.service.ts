import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/async-services/http';

@Injectable({
  providedIn: 'root'
})
export class CovidAssesmentService {

  constructor(private dataservice:DataService) { }

  public getCovidAssesmentQuestions(){
    return this.dataservice.genericSericeCaller("get","Authenticate/GetCovidAssesmentQuestions","");
  }

  public postCovidAssesmentAnswers(object: any) {
    return this.dataservice.genericSericeCaller("post", "Authenticate/PostCovidAssesmentAnswers",object);
  }
  
}




