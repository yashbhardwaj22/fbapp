import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  
} from 'angular-6-social-login';
import { RouterModule, Router, RouterOutlet } from '@angular/router'
import { FbserviceService } from '../services/fbservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private socialAuthService: AuthService,private route:Router,private user:FbserviceService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
   
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.user.check(userData)
   this.route.navigate(['/profilecomponent'])
            
      }
    );
  }
  ngOnInit() {
  }

}