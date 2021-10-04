import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public progress: number;
  public message: string;

  @Input() FileTable:string;

  @Input() Id:string;

  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

 public uploadFile = (files) => {
   
    if (files.length === 0) {
      return;
    }
    let filesToUpload : File[] = files;
    const formData = new FormData();
    
    formData.append('FileTable',this.FileTable);
    formData.append('Id',this.Id);
    
    Array.from(filesToUpload).map((file, index) => {
      return formData.append('file'+index, file, file.name);
    });

    this.http.post('https://localhost:44336/api/FileManager/Upload', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload Success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}
