import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: any;
  respuesta: any;
  usuario: any;
  public usuariosesion: any;
  urlPeticionNode = "https://dcb-node-deploy-nayeli.herokuapp.com/api/user";

  constructor(public httpClient: HttpClient, public router: Router) {
    this.usuarios = []
    this.respuesta = []
    this.usuario = {}
    this.usuariosesion = {}
  }
  //Login el usuario
  login(email, password) {
    this.httpClient.post('https://dcb-node-deploy-nayeli.herokuapp.com/api/login', { email, password }).subscribe((res: any) => {
      if (res.ok) {
        this.usuariosesion = res;
        console.log(res);
        console.log(this.usuariosesion);
        this.router.navigate(['/tabs/tab1'])
      } else {
        alert('Bad request');
      }
    })
  }

  obtenerUsuarios() {
    this.httpClient.get(this.urlPeticionNode).subscribe(
     //this.httpClient.get<any>(this.urlPeticionNode).subscribe(
     res => {
       this.usuario = res
       console.log(res);
     },
     err => {
       console.log("Hubo un error", err);
     }
    )
  }

  registrarUsuario(){
    this.httpClient.post(this.urlPeticionNode, this.usuario).subscribe(
      res => {
        this.respuesta = res;
      },
      err => {
        console.log("Hubo un error", err)
      }
    )
  }
  actualizarUsuario(name, email, password) {
    this.httpClient.put(this.urlPeticionNode, { name, email, password }).subscribe(
      res => {
        this.respuesta = res;
      },
      err => {
        console.log("Hubo un error", err)
      }
    )
  }


}
