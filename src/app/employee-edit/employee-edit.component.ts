import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  eCode=""
  readValues=()=>
  {
   let data:any={
    "eCode":this.eCode
      } 
      console.log(data)
}
}
