import { Component, OnInit } from '@angular/core';
import { AddStudent, GradeLevel, LearningStyle, PodLearningSubject, SpecialNeed } from 'src/app/classes/Parent/student';
import { ParentService } from 'src/app/services/parent/parent.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
obj_add_student:AddStudent;
lst_lerning_style:LearningStyle[];
lst_special_needs:SpecialNeed[];
lst_grade_level:GradeLevel[];
lst_pod_learning_subject:PodLearningSubject[];
fileTableName: string = 'ProfileImage';
public response: { 'dbPath': '' };

  constructor(public _parentService:ParentService,public userprofile:ProfileDataService,public _UtilityService: UtilityService) 
  {
    this.lst_grade_level=[];
    this.lst_lerning_style=[];
    this.lst_pod_learning_subject=[];
    this.lst_special_needs=[];
    this.obj_add_student=new AddStudent();
   }

  ngOnInit() {
    this.fillDropdownvalues();
  }
  Validate():boolean{
    if(this.obj_add_student.firstName=='' || this.obj_add_student.firstName==undefined){
      this._UtilityService.displayNotification("Please enter  first name", 'error');
    }else if(this.obj_add_student.lastName=='' || this.obj_add_student.lastName==undefined){
      this._UtilityService.displayNotification("Please enter last name", 'error');
    }else if(this.obj_add_student.email=='' || this.obj_add_student.email==undefined){
      this._UtilityService.displayNotification("Please enter Email", 'error');
    }else if(this.obj_add_student.password=='' || this.obj_add_student.password==undefined){
      this._UtilityService.displayNotification("Please enter Password", 'error');
    }else if(this.obj_add_student.confirmPassword=='' || this.obj_add_student.confirmPassword==undefined){
      this._UtilityService.displayNotification("Please enter Confirm Password", 'error');
    }else if(this.obj_add_student.password!=this.obj_add_student.confirmPassword){
      this._UtilityService.displayNotification("Passwords don't match", 'error');
    }else if(this.obj_add_student.specialNeed_ID==0 || this.obj_add_student.specialNeed_ID==null){
      this._UtilityService.displayNotification("Please select Special Needs", 'error');
    }else if(this.obj_add_student.subject_ID==0 || this.obj_add_student.subject_ID==null){
      this._UtilityService.displayNotification("Please select Student subject", 'error');
    }else if(this.obj_add_student.learningStyle_ID==0 || this.obj_add_student.learningStyle_ID==null){
      this._UtilityService.displayNotification("Please select Learning Style", 'error');
    }
    return true;
  }

  AddStudent(){
    debugger;
    if(this.Validate()){
      // var x=parseInt(this.obj_add_student.learningStyle_ID);
      this.obj_add_student.parent_ID=parseInt(this.userprofile.getAssosiatedId);
      this._parentService.AddStudent(this.obj_add_student).subscribe(data=>{
        if(data){
          console.log(data);
        }else{

        }
      });
    }
  }

  fillDropdownvalues(){
    this.getGradeLevelDD();
    this.getLearningStyleDD();
    this.getPodLearningSubjectDD();
    this.getSpecialNeedsDD();
  }

  getGradeLevelDD(){
    this._parentService.getGradeLevelDD().subscribe(data=>{
      if(data){
        console.log("GRADE LEVEL::")
        console.log(data);
        this.lst_grade_level=data;
      }else{

      }
    });
  }

  getLearningStyleDD(){
    this._parentService.getLearningStyleDD().subscribe(data=>{
      if(data){
        console.log("POD LEARNING STYLE::");
        console.log(data);
        this.lst_lerning_style=data;
      }else{

      }
    });
  }

  getPodLearningSubjectDD(){
      this._parentService.getPodLearnngSubjectDD().subscribe(data=>{
        if(data){
          console.log("POD LEARNING SUBJECT::");
          console.log(data);
          this.lst_pod_learning_subject=data;
        }else{

        }
      });
  }

  getSpecialNeedsDD(){
    this._parentService.getSpecialNeedsDD().subscribe(data=>{
      if(data){
        console.log("Special Needs::");
        console.log(data);
        this.lst_special_needs=data;
      }else{

      }
    })
  }

  
  public uploadFinished = (event) => {
    debugger;
    this.obj_add_student.imgeFile_ID= event.profile_Image_Id;
    this.response = event;
  }
}
