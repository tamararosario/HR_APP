import { Component, OnInit } from '@angular/core';
import {Skill} from '../skills.model'

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements OnInit {

  settings = {
    columns: {
      question: {
        title: 'Question'
      },
      description: {
        title: 'Description'
      }
    }
  };

  data = [
    {
      question: "Question1",
      description: "Description1"
    },

    {
      question: "Question2",
      description: "Description2"
    }



  ]

  // add skills array
  skills: Skill[] = [
    new Skill('Question Test', 'Description Test'),
    new Skill('Question Test2', 'Description Test2'),
    new Skill('Question Test3', 'Description Test3')
  ];

  constructor() { }

  ngOnInit() {
  }

}
