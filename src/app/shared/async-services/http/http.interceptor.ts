import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add a custom header
    var customReq;
    if(request.url.includes("FileManager"))
    {
    
    customReq = request.clone({
      headers: request.headers.set('Authorization',localStorage.getItem('Auth'))
    });
      
    }
    else
    {
      customReq = request.clone({
        headers: request.headers.set('Content-Type','application/json')
        .set('Authorization',localStorage.getItem('Auth'))
      });

    }


    // pass on the modified request object
    return next.handle(customReq).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }),
      catchError(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Processing http error', response);
        }
        return throwError(response);
      })
    );
  }
}
