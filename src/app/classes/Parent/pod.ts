export class PodResponse {
    caregiver_Status:string;
    content:string;
    parentPodID:number;
    parent_ID:number;
    parent_Status:string;
    pod_Learning_Environment:string;
    pod_Primary_language:string;
    pod_Secondary_language:string;
    status:string;
}

export class PodDetailResponse{
    parentPodID: number;
    pod_Primary_Language:string;
    pod_Secondary_Language: string;
    parent_Status: string;
    caregiver_Status: string;
    pod_Learning_Environment:string;
    state: string;
    zipCode: string;
    city: string;
    country: string;
    firstName: string;
    lastName: string;
  }


  export class AssignPodStudent{
    StudentID:number;
    PodID:number;
  }
  