import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
  
})
export class EmployeeListComponent implements OnInit {

showSalary : boolean = false;
maskSalary : boolean = false; 
maskedSalary:string = '#####';
searchText : string = '';
flag : boolean = false;
counter : number = 1;

employeeList  = [{
        "employeeName": "Bruce Wayne",
        "DOB": '1/1/1990',
        "Gender": "Male",
        "Salary": 12345.10
    },
    {
        "employeeName": "Clark Kent",
        "DOB": '2/2/1991',
        "Gender": "Male",
        "Salary": 23456.10
    },
     {
        "employeeName": "Arthur Curry",
        "DOB": '3/3/1992',
        "Gender": "Male",
        "Salary": 23467.90 
    },
    {
        "employeeName": "Diana Prince",
        "DOB": '4/4/1993',
        "Gender": "Female",
        "Salary": 98765.10
    }];

  constructor() { }

  ngOnInit() {
  }

  toggleFlag(){
      this.flag = !this.flag;
  }

}
