import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router';
import {SigninComponent  } from './signin/signin.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("664631360570031")
        },
  
          
      ]
  );
  return config;
}
const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'profilecomponent',
    component:ProfileComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes),
    
    
  ],
  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

