import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public router:Router,
    public modalCtrl:ModalController,
    public actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }
  tab2(){
    this.router.navigate(['/tabs/tab2'])
  }
  tab3(){
    this.router.navigate(['/tabs/tab3'])
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'TexApp',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Comprar',
        icon: 'card-outline',
        handler: () => {
          console.log('Play clicked');
          this.tab3();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
    
  }
}
