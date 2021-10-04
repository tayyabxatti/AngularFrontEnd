import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpResponseHandler } from './http-response-handler.service';
import { DomainUtills } from '../../utility/domainUtills/domain-utills';

@Injectable()
export class DataService {
  private myDomain: string;
  private domainUtills = new DomainUtills();
  constructor(
    protected httpClient: HttpClient,
    protected responseHandler: HttpResponseHandler
  ) {
    this.myDomain = this.domainUtills.GetDomain();
  }


  public genericSericeCaller(callType: string, controlerActionName: string, data: any)
  {
    let apiUrl=this.myDomain + controlerActionName;
    if (callType && controlerActionName) {
      if (callType == "post") {
        return this.httpClient
        .post(apiUrl, JSON.stringify(data))
        .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
      }
      else if(callType=="get")
      {
        return this.httpClient
        .get(apiUrl)
        .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
      }
    }
  }

  // getOneById(id) {
  //   
  //   return this.httpClient.get(this.url + '/' + id);
  // }

  // public getAll() {
  //   return this.httpClient
  //     .get(this.url)
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }

  // public create(post: any) {
  //   return this.httpClient
  //     .post(`${this.url}`, JSON.stringify(post))
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }

  // public update(post: any) {
  //   return this.httpClient
  //     .patch(`${this.url}/${post.id}`, JSON.stringify(post))
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }

  // public delete(id: any) {
  //   return this.httpClient
  //     .delete(`${this.url}/${id}`)
  //     .pipe(catchError((err, source) => this.responseHandler.onCatch(err, source)));
  // }
  /**private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    }
    return throwError(new AppError(error));
  }**/
}
