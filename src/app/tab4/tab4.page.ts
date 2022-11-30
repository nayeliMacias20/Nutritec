import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { FotosService } from '../servicios/fotos.service';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {



  constructor(public router:Router,
    public modalCtrl:ModalController,
    public actionSheetController: ActionSheetController,
    public userService: UsuariosService,
    public fotoService: FotosService
    //private firestoreService: FirestoreService
  ) { }
  addNewImageGallery(){
      this.fotoService.addNewImageGallery();
    }

 async ngOnInit() {
    //Crear usuario vacio
    //this.EditarDietas = {} as Dietas;
    this.userService.obtenerUsuarios();
    //Inicia y deja las fotos cargadas
    await this.fotoService.loadSaved();
  }

  home() {
    this.router.navigate(['/tabs/tab1'])
  }
  
}
