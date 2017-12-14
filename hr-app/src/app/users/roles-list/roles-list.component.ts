import { Component, OnInit } from '@angular/core';
import {User} from '../user.model'

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Full Name'
      },
      lastname: {
        title: 'Last Name'
      },
      email: {
        title: 'Email'
      },
      phone: {
        title: 'Phone'
      },
      Department: {
        title: 'Department'
      }


    }
  };

  // add recuiter array
  user: User[] = [
    new User('NAME Test1', 'Last Name Test1', 'phone test1','email test1', 'department test1' ),
    new User('NAME Test2', 'Last Name Test2', 'phone test2','email test2', 'department test2' ),
    new User('NAME Test3', 'Last Name Test3', 'phone test3','email test3', 'department test3' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
