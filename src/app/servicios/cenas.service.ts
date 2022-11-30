import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CenasService {
  cenas:any;
  respuesta:any;
  urlPeticionNode = "http://localhost:3000/api/cenas";

  constructor(public httpClient:HttpClient) {
    this.cenas=[]
    this.respuesta=[]
   
  }

  obtenerCenas(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      //this.httpClient.get<any>(this.urlPeticionNode).subscribe(
      res=>{
        this.cenas = res
        console.log(res);
      },
      err=>{
        console.log("Hubo un error",err);
      }
    )
  }
}
