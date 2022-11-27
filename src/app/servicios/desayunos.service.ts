
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
    this.httpClient.get<any>(this.urlPeticionNode).subscribe(
      res=>{
        this.desayunos = res.cont.desayunos
        console.log(res.cont);
      },
      err=>{
        console.log("Hubo un error",err);
      }
    )
  }
}
