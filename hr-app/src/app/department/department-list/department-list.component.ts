import { Component, OnInit } from '@angular/core';
import {Department} from '../department.model'

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Department'
      },
      description: {
        title: 'Description'
      }


    }
  };

   // add skills array
   department: Department[] = [
    new Department('Department Test', 'Description Test'),
    new Department('Department Test2', 'Description Test2'),
    new Department('Department Test3', 'Description Test3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
