import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  dietas:any;
  respuesta:any
  dieta:any
  urlPeticionNode = "http://localhost:8090/api";

  constructor(public httpClient: HttpClient) {
    this.dietas = []
    this.respuesta=[]
    this.dieta={}
  }


  obtenerDiets(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      res=>{
        this.dietas= res
        console.log(this.dietas)
      },
      err=>{
        console.log("Hubo un error",err)
      }
    )
  }

  //agregarProducto(){
  //  this.httpClient.post(this.urlPeticionNode,this.usuario).subscribe(
  //    res=>{
  //      this.respuesta=res;
  //    }
  //  )
  //}

  //borrarProducto(){
  //  this.httpClient.delete
  //}
}
