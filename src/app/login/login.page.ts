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
  user:string
  pass:string
  email:string
  mostrar:boolean
  valor:string
  us:any
  constructor(public alertController: AlertController, public userService:UsuariosService, public router:Router) { 
    this.mostrar=true;
    this.valor='Login'
    this.us=[]
  }

  ngOnInit() {
    this.userService.obtenerUsuarios();
  }

  showInfo(value:boolean){
    this.mostrar=value;
    if(value==true){
      this.valor='Login'
    }else{
      this.valor='Sing Up'
    }
  }
  async iniciarSesion(){
    let userAct:any=[]
    for(let i=0;i<this.userService.usuarios.length;i++){
      if(this.user==this.userService.usuarios[i].correo){
        
        if(this.pass==this.userService.usuarios[i].pass){
          /* Tipos de usuario:
          1 usuario final.
          0 admin
          */
          if(this.userService.usuarios[i].tipo==0){
            this.router.navigate(['/tabs/tab1'])
          }else if(this,this.userService.usuarios[i].tipo==1){
            this.router.navigate(['/tabs/tab1'])
          }
          userAct=this.userService.usuarios[i];
          this.userService.usuarios=userAct;
          localStorage.setItem('userApp',JSON.stringify(userAct));
        }else{
          const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          message: 'CREDENCIALES INVALIDADS.',
          buttons: ['OK']
         });
  
          await alert.present();
        }
      }
    }
    this.user=null;
    this.pass=null;
  }

  async singup(){
    if(this.user==null || this.pass==null ||  this.email==null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: 'COMPLETAR EL FORMULARIO',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      
      this.userService.usuario.nombre=this.user;
      this.userService.usuario.pass=this.pass;
      this.userService.usuario.correo=this.email;
      this.userService.usuario.tipo=1;
      
      this.userService.registrarUsuario()
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INFO',
      message: 'Usuario Regiastrado',
      buttons: ['OK']
      });
      await alert.present();
      
      this.showInfo(true);

      this.user=null;
      this.email=null;
      this.pass=null;
    }
  }

}
