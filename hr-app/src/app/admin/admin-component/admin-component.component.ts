import { Component, OnInit } from '@angular/core';
//  import {UserService} from '../admin-shared/user.service';
import {Router} from '@angular/router';

@Component({
  template: '<router-outlet></router-outlet>'
})
export class AdminComponentComponent implements OnInit {

 
  constructor(){}
//   constructor(private userSVC: UserService, private router: Router) { }

   ngOnInit() {
//     this.theUser = this.userSVC.loggedInUser;
   }

//   logout(){
//     this.userSVC.logout();
//     this.router.navigate(['']);
// }

}
