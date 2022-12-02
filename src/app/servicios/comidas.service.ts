import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  comidas:any;
  respuesta:any;
  urlPeticionNode = "https://dcb-node-deploy-nayeli.herokuapp.com/api/comidas";

  constructor(public httpClient:HttpClient) { 
    this.comidas=[]
    this.respuesta=[]
  }
  obtenerComidas(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      //this.httpClient.get<any>(this.urlPeticionNode).subscribe(
      res=>{
        this.comidas = res
        console.log(res);
      },
      err=>{
        console.log("Hubo un error",err);
      }
    )
  }
}
