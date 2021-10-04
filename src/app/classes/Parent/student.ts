export class AddStudent {
firstName:string;
lastName:string;
email:string;
password:string;
confirmPassword:string;
imgeFile_ID:number;
parent_ID:number;
gradeLevel_ID:number;
specialNeed_ID:number;
subject_ID:number;
learningStyle_ID:number;
constructor(){
    this.gradeLevel_ID=0;
    this.specialNeed_ID=0;
    this.subject_ID=0;
    this.learningStyle_ID=0;
}
}

export class GradeLevel{
    gradeLevelID:number;
    name:string; 
}

export class LearningStyle{
    id:number;
    name:string;
}

export class SpecialNeed{
    specialNeedID:number;
    name:string; 
}

export class PodLearningSubject{
    id:number;
    name:string;
}

export class StudentListDto
{
        email:string;     
        firstName:string;
        gradeLevel:string;
        image_Name:string;
        lastName:string;
        specialNeed:string;
        subjectName:string;
        Image_Name:string;
        title:string;
        content:string;
        studentID:number;
}

export class StudentListDd
{
        email:string;     
        firstName:string;
        gradeLevel:string;
        image_Name:string;
        lastName:string;
        specialNeed:string;
        subjectName:string;
        Image_Name:string;
        title:string;
        content:string;
        studentID:number;
        constructor(){
            this.studentID=0;
        }
}


export class StudentDetailDto{
    email:string;
    firstName:string;
    gradeLevel:string;
    image:string;
    lastName:string;
    learningStyle:string;
    specialNeed:string;
    studentId:string;
    subject:string;
}