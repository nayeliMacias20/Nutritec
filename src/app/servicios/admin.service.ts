import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  usuarios:any;
  respuesta:any
  usuario:any
  urlPeticionNode = "http://localhost:8080/api";

  constructor(public httpClient:HttpClient) {
    this.usuarios=[]  
    this.respuesta=[]
    this.usuario={}
  }


  obtenerUsers(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      res=>{
        this.usuarios= res
        console.log(this.usuarios)
      },
      err=>{
        console.log("Hubo un error",err)
      }
    )
  }

  agregarProducto(){
    this.httpClient.post(this.urlPeticionNode,this.usuario).subscribe(
      res=>{
        this.respuesta=res;
      }
    )
  }

  borrarProducto(){
    this.httpClient.delete
  }
}
