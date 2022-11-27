import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource, Photo} from '@capacitor/camera';
import { Filesystem, Directory} from '@capacitor/filesystem';
import { Storage} from '@capacitor/storage';
import { rejects } from 'assert';
import { Foto } from '../Models/foto.interface'

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  //Arreglo para almacenar las fotografias
  public fotos: Foto[] = [];
  //Clave para recuperar todas las fotos
  private PHOTO_STORAGE: string = "Fotos";

  constructor() { }

  //Donde se almacenará las fotografias

  public async addNewImageGallery(){
    //Proceso donde se tomará la fotografia
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    //this.fotos.unshift({
    //  //Mandamos a llamar la interface de foto 
    //  //Para poder publicarla
    //  filepath: "Foto_",
    //  webviewPath: fotoCapturada.webPath
    //})

    const savedImageFile = await this.saveImageGallery(fotoCapturada)
    this.fotos.unshift(savedImageFile)

    Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.fotos)
    })
  }

  public async saveImageGallery(cameraPhoto: CameraPhoto ){
  //Convertir la foto a Base64
  const base64Data = await this.readBase64(cameraPhoto);
  //Escirbir la foto en el directorio
  const fileName = new Date().getTime + '.jpeg';
  const savedFile = await Filesystem.writeFile({
    path: fileName,
    data: base64Data,
    directory: Directory.Data
  })
    return{
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    }
  }

  public async readBase64(cameraPhoto: CameraPhoto){
    //Convertir de blob a Bae64
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    //Forzando la conversión
    return await this.convertBlobToBase64(blob) as string
  }
  //Promesas
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject)=>{
    const reader = new FileReader
    reader.onerror = reject
    reader.onload = () =>{
      resolve(reader.result)
    }
    reader.readAsDataURL(blob);
  })
  public async loadSaved(){
    //Recuperar las fotos del caché
    const listaFotos = await Storage.get({key: this.PHOTO_STORAGE})
    this.fotos = JSON.parse(listaFotos.value) || []
    //Desplegar las fotos en formato base 64
    for(let foto of this.fotos){
      //Leer cada foto almacenada en el sistema de archivos
      const readFile = await Filesystem.readFile({
        path: foto.filepath,
        directory: Directory.Data
      })

      //Solo para plataforma web
      foto.webviewPath = `data:image/jpeg;base64,${readFile}`
    }
  }
}
//me quede en el minuto 1:50:00
