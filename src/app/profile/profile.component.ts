import { Component, OnInit } from '@angular/core';

import { FbserviceService } from '../services/fbservice.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit {
  item:any;
  

  constructor(private user:FbserviceService) { }

  ngOnInit() {
    this.item=this.user.getData()
    console.log(this.item);
  }
}

