import { Component, OnInit } from '@angular/core';
// import {UserService} from '../admin-shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;


//  constructor(private userSVC: UserService, private router: Router) { }

//  login(){
//      this.userSVC.register(this.email, this.password1);
//      this.userSVS.verifyUser();
//    }
//    signup(){
//      this.router.navigate(['admin/signup']);
//   }
//  cancel(){
//    this.router.navigate(['']);
//   }  
  


  ngOnInit() {
  }

}
