import { Component, OnInit } from '@angular/core';
import {Recuiter} from '../recuiter.model'

@Component({
  selector: 'app-recuiters-list',
  templateUrl: './recuiters-list.component.html',
  styleUrls: ['./recuiters-list.component.css']
})
export class RecuitersListComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      lastname: {
        title: 'User Name'
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
   recuiter: Recuiter[] = [
    new Recuiter('NAME Test1', 'Last Name Test1', 'phone test1','email test1', 'department test1' ),
    new Recuiter('NAME Test2', 'Last Name Test2', 'phone test2','email test2', 'department test2' ),
    new Recuiter('NAME Test3', 'Last Name Test3', 'phone test3','email test3', 'department test3' )
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
