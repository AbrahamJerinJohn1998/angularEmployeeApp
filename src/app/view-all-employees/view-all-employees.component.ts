import { Component } from '@angular/core';

@Component({
  selector: 'app-view-all-employees',
  templateUrl: './view-all-employees.component.html',
  styleUrls: ['./view-all-employees.component.css']
})
export class ViewAllEmployeesComponent {
  data=[
    {
"name":"Jerin",
"designation":"Software Engineer",
"salary":25000,
"PhoneNo":9846251235,
"email":"ajj@gmail.com",
"cname":"Nest Digital"
  },
  {
    "name":"Jobin",
    "designation":"Software Engineer",
    "salary":35000,
    "PhoneNo":9846251235,
    "email":"ajj@gmail.com",
    "cname":"UST"
      },
      {
        "name":"MATHEW",
        "designation":"Software Engineer",
        "salary":45000,
        "PhoneNo":9846251235,
        "email":"ajj@gmail.com",
        "cname":"Nest Digital"
          },
          {
            "name":"ARUN",
            "designation":"Software Engineer",
            "salary":40000,
            "PhoneNo":9846251235,
            "email":"ajj@gmail.com",
            "cname":"UST"
              },
              {
                "name":"JACK",
                "designation":"Software Engineer",
                "salary":48000,
                "PhoneNo":9846251235,
                "email":"ajj@gmail.com",
                "cname":"Nest Digital"
                  }
]

}
