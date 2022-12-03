import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { FotosService } from '../servicios/fotos.service';
import { UsuariosService } from '../servicios/usuarios.service'; //usuarios

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  name: string
  pass: string
  email: string
  usuariosesion: any


  constructor(public router: Router,
    public modalCtrl: ModalController,
    public actionSheetController: ActionSheetController,
    public userService: UsuariosService,
    public fotoService: FotosService
    //private firestoreService: FirestoreService
  ) {
    this.usuariosesion = userService.usuariosesion;
  }
  addNewImageGallery() {
    this.fotoService.addNewImageGallery();
  }

  async ngOnInit() {
    console.log(this.usuariosesion);
    await this.fotoService.loadSaved();
  }


  home() {
    this.router.navigate(['/tabs/tab1'])
  }
}
