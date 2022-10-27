import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../servicios/admin.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  Clave:string
  Tipo:string
  Marca:string
  Color:string
  Talla:string
  Precio:number
  Cantidad: number
  fileToUpload: File = null;
  imagenBase64:any

  constructor(public alertController: AlertController,
     public adminService:AdminService,
      public router:Router) {}

  
  async agregarProducto(){
   if(this.Clave==null ||this.Tipo==null || this.Marca==null ||  this.Color==null || this.Talla==null || this.Precio==null || this.Cantidad==null){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: 'COMPLETAR EL FORMULARIO',
        buttons: ['OK']
      });
      await alert.present();
    }else{
      
      this.adminService.usuario.Clave=this.Clave;
      this.adminService.usuario.Tipo=this.Tipo;
      this.adminService.usuario.Marca=this.Marca;
      this.adminService.usuario.Color=this.Color;
      this.adminService.usuario.Talla=this.Talla;
      this.adminService.usuario.Precio=this.Precio;
      this.adminService.usuario.Cantidad=this.Cantidad;
      
     

      
      this.adminService.agregarProducto()
      const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'INFO',
      message: 'Producto Regiastrado',
      buttons: ['OK']
      });
      await alert.present();

      this.Clave=null;
      this.Tipo=null;
      this.Marca=null;
      this.Color=null;
      this.Talla=null;
      this.Precio=null;
      this.Cantidad=null;
    }
  }

  async selectImagen(files: FileList){
    console.log("si entro",<HTMLInputElement>document.getElementById('img'));
    const toBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
  });
 // async Main() =>  {
    this.fileToUpload = files.item(0);
    console.log(await toBase64(this.fileToUpload));
    this.imagenBase64=await toBase64(this.fileToUpload);
 //}
  //Main();
  }
  

  
 

}
