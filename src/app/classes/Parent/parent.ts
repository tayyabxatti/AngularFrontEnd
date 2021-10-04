export class Parent {
    ParentId:number;
    Country:string;
    City:string;
    State:string;
    Street:string;
    DOB:Date;
    ZipCode:string;
    Pod_Primary_Language:string;
    Pod_Secondary_Language:string;
    Parent_Status:string;
    Caregiver_Status:string;
    Pod_Learning_Environment:string;
    Profile_Image:any;
    UserId:number;
    constructor(){
        this.Country="Select Country";
        this.State="Select State";
        this.Pod_Primary_Language="Select Pod Primary Speaking Language";
        this.Pod_Secondary_Language="Select Pod Secondary Speaking Language";
        this.Parent_Status="Select Parent Status";
        this.Caregiver_Status="Select Caregiver Status";
        this.Pod_Learning_Environment="Select Pod Learning Environment";

    }
}
