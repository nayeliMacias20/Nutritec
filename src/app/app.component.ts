import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router,public userService:UsuariosService) {
    let usuarioLoggeado = localStorage.getItem('userApp');
      let user= JSON.parse(usuarioLoggeado);//Convertir de string a json
    if(usuarioLoggeado){
      /*let parametros:NavigationExtras={
        queryParams:{
          usuario:user.user
        }*/
        this.userService.usuarios= user;
        if(user.tipoUser==0){
          this.router.navigate(['/home']);
        }
        if(user.tipoUser==1){
          this.router.navigate(['/home']);
        }
        
      }else{
        this.router.navigate(['/login']);
      }
      
    
  }
}
