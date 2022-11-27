import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuarios: any;
  respuesta: any;
  usuario: any;
  urlPeticionNode = "http://localhost:3000/api/user";

  constructor(public httpClient: HttpClient) {
    this.usuarios = []
    this.respuesta = []
    this.usuario = {}
  }
  login(){
    this.httpClient.post(this.urlPeticionNode, this.usuario.email + '/login').subscribe(
      res => {
        this.respuesta = res;
        console.log(this.usuarios)
      },
      err => {
        console.log("Hubo un error", err)
      }
    )
  }
  obtenerUsuarios() {
    this.httpClient.get(this.urlPeticionNode).subscribe(
      res => {
        this.usuarios = res
        console.log(this.usuarios)
      },
      err => {
        console.log("Hubo un error", err)
      }
    )
  }
  registrarUsuario() {
    this.httpClient.post(this.urlPeticionNode, this.usuario).subscribe(
      res => {
        this.respuesta = res;
      },
      err => {
        console.log("Hubo un error", err)
      }
    )
  }
  actulizarUsuario() {
    this.httpClient.put(this.urlPeticionNode + this.usuarios.id, this.usuarios).subscribe(
      res => {
        this.usuarios = res;
      }
    )
  }

}
