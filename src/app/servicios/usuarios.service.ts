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
  urlPeticionNode = "http://localhost:3000/api/user";

  constructor(public httpClient: HttpClient, public router: Router) {
    this.usuarios = []
    this.respuesta = []
    this.usuario = {}
  }
 //Login el usuario
  login(email, password) {
    this.httpClient.post('http://localhost:3000/api/login', { email, password }).subscribe((res: any) => {
      if (res.ok) {
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


}
