import { DataService } from './../../../shared/async-services/http/data.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _servicecaller:DataService) { }

  exampleTest(a:any) {
    return this._servicecaller.genericSericeCaller("get", "Bot/Listen"+a, "");
  }
}
