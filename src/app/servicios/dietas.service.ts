import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietasService {
  dietas:any;
  respuesta:any;
  dieta:any;
  urlPeticionNode = "http://localhost:3000/api/desayuno";
  constructor(public httpClient:HttpClient) { 
    this.dietas=[]
    this.respuesta=[]
    this.dieta={}
  }
  obtenerDietas(){
    this.httpClient.get(this.urlPeticionNode + '/dietas').subscribe(
      res=>{
        this.dietas= res
        console.log(this.dietas)
      },
      err=>{
        console.log("Hubo un error",err)
      }
    )
  }
}
