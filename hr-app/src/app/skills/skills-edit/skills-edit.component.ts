import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddItem(form: NgForm){
    const value = form.value;
    // const newQuestion = new Question(value.question)

  }

}
