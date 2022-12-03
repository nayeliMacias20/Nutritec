import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  mostrar:boolean;
  valor:string
  name:string
  usuariosesion: any

  constructor(public router:Router,
    public alertController: AlertController, public userService:UsuariosService) {
      this.mostrar=true;
      this.valor=''
      this.usuariosesion = userService.usuariosesion;
 } 
  ngOnInit() {
    console.log(this.usuariosesion);
  }
 tab1ad(){
   this.router.navigate(['/tabs/tab1-ad'])
  }
  tab2() {
    this.router.navigate(['/tabs/tab2'])
  }
  tab2ad() {
    this.router.navigate(['/tabs/tab2-ad'])
  }
  tab3() {
    this.router.navigate(['/tabs/tab3'])
  }
}
