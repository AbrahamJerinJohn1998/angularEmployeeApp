import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {
  eCode=""
  readValues=()=>
  {
   let data:any={
    "eCode":this.eCode
      } 
      console.log(data)
}
}
