import { Component, OnInit } from '@angular/core';
// import {UserService} from '../admin-shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: string;
  password1: string;
  password2: string;
  passwordFail: boolean = false;


  // constructor(private userSVC: UserService, private router: Router) { }

  // singUp(){
  //   if(this.password1 !== this.password2){
  //     this.passwordFail = true;
  //   } else{
  //     this.passwordFail = false;
  //     this.userSVC.register(this.email, this.password1);
  //     this.userSVS.verifyUser();

  //   }
  // }

  // cancel(){
  //   this.router.navigate(['/admin/login']);
  // }

  ngOnInit() {
  }

}
