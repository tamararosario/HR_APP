import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };


  creatingInterview= 'no new interview';
  candidateName = '';
  constructor() { }

  ngOnInit() {
  }
  onCreateInterview(){
    this.creatingInterview = 'Interview was Created';
  }

  onNewCandidate(event: any){
    this.candidateName = (<HTMLInputElement> event.target).value;
  }

}
