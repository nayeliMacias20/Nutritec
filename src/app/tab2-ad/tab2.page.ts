import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../servicios/admin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
 
  constructor(public alertController: AlertController,
     public adminService:AdminService,
      public router:Router) {}

  
 
 

}
