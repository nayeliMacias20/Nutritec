import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColacionesService {
  colaciones:any;
  respuesta:any;
  urlPeticionNode = "https://dcb-node-deploy-nayeli.herokuapp.com/api/colaciones";

  constructor(public httpClient:HttpClient) {
    this.colaciones=[]
    this.respuesta=[]
  }
  obtenerColaciones(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      //this.httpClient.get<any>(this.urlPeticionNode).subscribe(
      res=>{
        this.colaciones = res
        console.log(res);
      },
      err=>{
        console.log("Hubo un error",err);
      }
    )
  }
}
