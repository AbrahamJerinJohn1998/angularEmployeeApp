import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
name=""
designation=""
salary=""
PhoneNo=""
email=""
cname=""
yearOfExpereince=""
readValues=()=>
{
 let data:any={
  "name":this.name,
  "designation":this.designation,
  "salary":this.salary,
  "PhoneNo":this.PhoneNo,
  "email":this.email,
  "cname":this.cname,
  "yearOfExpereince":this.yearOfExpereince
    } 
    console.log(data)
}

}
