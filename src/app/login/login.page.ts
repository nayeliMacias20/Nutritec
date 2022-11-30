import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string
  pass: string
  email: string
  mostrar: boolean
  valor: string
  us: any
  constructor(public alertController: AlertController, public userService: UsuariosService, public router: Router) {
    this.mostrar = true;
    this.valor = 'Login'
    this.us = []
  }
  ngOnInit() {
    this.userService.obtenerUsuarios();
  }
  showInfo(value: boolean) {
    this.mostrar = value;
    if (value == true) {
      this.valor = 'Login'
    } else {
      this.valor = 'Sing Up'
    }
  }

  login() {
    this.userService.login(this.email, this.pass);
  }

  // async iniciarSesion() {
  //   let userAct: any = []
  //   //for(let i=0;i<this.userService.usuarios.length;i++){
  //     console.log(this.userService.usuarios.email);

  //   if (this.email == this.userService.usuarios.email) {
  //     console.log("si entra aqui");
  //     if (this.pass == this.userService.usuarios.password) {
  //       //if(this.userService.usuarios[i].tipo==0){
  //       this.router.navigate(['/tabs/tab1'])
  //       //}else if(this,this.userService.usuarios[i].tipo==1){
  //       //  this.router.navigate(['/tabs/tab1'])
  //       //}

  //       userAct = this.userService.usuarios;
  //       this.userService.usuarios = userAct;
  //       localStorage.setItem('userApp', JSON.stringify(userAct));
  //     } else {
  //       console.log("no esta bien el usuaro");
  //       const alert = await this.alertController.create({
  //         cssClass: 'my-custom-class',
  //         header: 'Error',
  //         message: 'Email o Password Incorrectas, Intente de nuevo.',
  //         buttons: ['OK']
  //       });
  //       await alert.present();
  //     }
  //   }
  //   //}
  //   this.email = null;
  //   this.pass = null;
  // }
  async singup() {
    if (this.name == null || this.pass == null || this.email == null) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: 'COMPLETAR EL FORMULARIO',
        buttons: ['OK']
      });
      await alert.present();
    } else {

      this.userService.usuario.name = this.name;
      this.userService.usuario.password = this.pass;
      this.userService.usuario.email = this.email;

      this.userService.registrarUsuario()
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'INFO',
        message: 'Usuario Registrado',
        buttons: ['OK']
      });
      await alert.present();

      this.showInfo(true);

      this.name = null;
      this.email = null;
      this.pass = null;
    }
  }
}
