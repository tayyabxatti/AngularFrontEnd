export class CovidAssesmentQuestions {
    covid_Question_ID:number;
    question_Description:string;
}

export class CovidAssesmentQuestionsAnswers{
    User_Covid_Assesment_Id:number;
    UserId:number;
    Covid_Question_Id:number;
    Is_Answer_True:boolean;
}

export class AnswerSubmission{
    questionId:number;
    question_description:string;
    user_id:number;
    check_yes:string;
    check_no:string;
    yes_id:string;
    no_id:string;
    constructor(){
        this.check_no='true';
    }
}