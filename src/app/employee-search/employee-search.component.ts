import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  eCode=""
  readValues=()=>
  {
   let data:any={
    "eCode":this.eCode
      } 
      console.log(data)
}
}
