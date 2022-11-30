
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesayunosService {
  desayunos:any;
  respuesta:any;
  urlPeticionNode = "http://localhost:3000/api/desayuno";

  constructor(public httpClient:HttpClient) {
    this.desayunos=[]
    this.respuesta=[]
  }
  obtenerDesayunos(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      //this.httpClient.get<any>(this.urlPeticionNode).subscribe(
      res=>{
        this.desayunos = res
        console.log(res);
      },
      err=>{
        console.log("Hubo un error",err);
      }
    )
  }
}
