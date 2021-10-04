export class ParentList {
    
        userId:number;
        firstName:string;
        lastName:string;
        email:string;
        isProfileCompleted:string;
        country:string;
        city:string;
        street:string;
}

export class ParentDetails{
        city:string;
        country: string;
        covidStatus: string;
        email: string;
        firstName: string;
        isProfileCompleted: boolean;
        lastName: string;
        street: string;
        userId: number;
        pod_Primary_Language:string;
        pod_Secondary_Language:string;
        state:string;
        zipCode:string;
        totalMarks:string;
        obtainMarks:string;
}

export class ParentCovidAnswer{
        question_Description:string;
        answere:boolean;
}

export class TeacherDetail{
        certification_Status:string;
        city:string;
        country:string;
        dob:string;
        email:string;
        firstName:string;
        isProfileCompleted:boolean;
        lastName:string;
        obtainMarks:number;
        pod_Primary_Language:string;
        pod_Secondary_Language:string;
        preferred_Grade_Level:string;
        state:string;
        street:string;
        teacherID:number;
        teaching_skills:string;
        totalMarks:number;
        userId:number;
        willingTotravel:string;
        zipCode:string;
}

export class TeacherList{
        firstName:string;
        lastName:string;
        Email:string;
        isProfileCompleted:string;
        country:string;
        city:string;
        street:string;
        profileImage:string;   
}
