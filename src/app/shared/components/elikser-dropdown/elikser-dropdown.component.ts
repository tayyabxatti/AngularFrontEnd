import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Select2Option } from 'select2-angular-component';

@Component({
  selector: 'elikser-dropdown',
  templateUrl: './elikser-dropdown.component.html',
  styleUrls: ['./elikser-dropdown.component.css']
})
export class ElikserDropdownComponent implements OnInit {

  modelData:any;


  @Input()
  set data(value: any) {
    
    this.dropDownData = value;
    if(value.length==0)
    {
      this.modelData=this.dropDownData;
      this.dropDownData=[{value:0,label:"No Data"}]
    }
    this.dropDownDataCopy=[...this.dropDownData];

  }
  @Output() value = new EventEmitter();
  
  public dropDownData: any;
  public dropDownDataCopy: any;

  constructor() { }

  ngOnInit() {
  }
  
  search(text: string) {
    this.dropDownData = text
      ? ([...this.dropDownData] as Select2Option[]).filter(option => option.label.toLowerCase().indexOf(text.toLowerCase()) > -1)
      : [...this.dropDownDataCopy];
  }

  update(selected: any) {
    this.value.emit(this.dropDownDataCopy.filter(d => {return d.value==selected})[0]);
  }

  open() {
    this.dropDownData = [...this.dropDownDataCopy];
  }

}
