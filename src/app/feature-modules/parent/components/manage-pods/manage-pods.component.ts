import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PodResponse } from 'src/app/classes/Parent/pod';
import { ParentService } from 'src/app/services/parent/parent.service';
import { ProfileDataService, UtilityService } from 'src/app/shared/utility';

@Component({
  selector: 'app-manage-pods',
  templateUrl: './manage-pods.component.html',
  styleUrls: ['./manage-pods.component.css']
})
export class ManagePodsComponent implements OnInit {
lst_pending_pods:PodResponse[];
parentId:number;
  constructor(public _parentService:ParentService,public userprofile:ProfileDataService,
     private route: ActivatedRoute,private _router:Router
     ,public _UtilityService: UtilityService ) 
  {
    this.lst_pending_pods=[];

  }

  ngOnInit() {
    this.getPendingPods();
  }

  getPendingPods(){
    var parentId=parseInt(this.userprofile.getAssosiatedId);
    this._parentService.GetPendingPods(parentId).subscribe(data=>{
      if(data){
        debugger;
        this.lst_pending_pods=data;
        this.lst_pending_pods.forEach(x=>{
          x.content = 'data:image/jpeg;base64,' + x.content;
        });
      }
    });
  }

  navigateToDetails(parentPodID:any){
    this._router.navigate(["/parent/view-pod/"+parentPodID]);
  }

}
