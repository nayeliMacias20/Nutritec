import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { ModalController} from '@ionic/angular';
import { AdminService } from '../servicios/admin.service';
import { Tab4Page } from '../tab4/tab4.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public router:Router,
    public actionSheetController:ActionSheetController,
    public modalController: ModalController,
    public userService:AdminService) {}
  colors = ['red', 'green', 'blue', 'yellow'];
  
  autocomplete: { input: string; };
  ngOnInit() {
    this.userService.obtenerProductos();
  }

  //Metodo de cambiar
  tab3(){
    this.router.navigate(['/tabs/tab3'])
  }
  tab1(){
    this.router.navigate(['/tabs/tab1'])
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
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
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
  async presentModal() {
    const modal = await this.modalController.create({
      component: Tab4Page,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  updateSearchResults() {
    console.log(this.autocomplete.input)    //search input will display
  }
}

