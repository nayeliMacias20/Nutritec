import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  ventas:any;
  respuesta:any
  venta:any
  urlPeticionNode = "http://localhost:9000/api/";

  constructor(public httpClient:HttpClient) { 
    this.ventas=[]
    this.respuesta=[]
    this.venta={}
  }
  obtenerVentas(){
    this.httpClient.get(this.urlPeticionNode).subscribe(
      res=>{
        this.ventas= res
        console.log(this.ventas)
      },
      err=>{
        console.log("Hubo un error",err)
      }
    )
  }
  createVenta(){
    this.httpClient.post(this.urlPeticionNode,this.venta).subscribe(
      res=>{
        this.respuesta=res;
      }
    )
  }
}
