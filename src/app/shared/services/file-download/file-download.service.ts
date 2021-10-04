import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainUtills } from './../../utility/domainUtills/domain-utills';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {
  private myDomain: string;
  private domainUtills = new DomainUtills();


  public constructor(private http: HttpClient) {
    this.myDomain = this.domainUtills.GetDomain();

  }

  public downloadFile(id:number,filetable:string,filename:string) {
    this.http.get(this.myDomain + 'FileManager/OnGetDownloadDb?id='+id+"&filename="+filetable, { responseType: 'blob' }).subscribe(blob => {
       saveAs(blob, filename);
    });
  }
}
