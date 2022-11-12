import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';
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
    public userService: UsuariosService
    //private firestoreService: FirestoreService
  ) { }

  ngOnInit() {
    //Crear usuario vacio
    //this.EditarDietas = {} as Dietas;
    this.userService.obtenerUsuarios();
  }

  //clicInsertarDieta() {
  //  this.firestoreService.insertar("dietas", this.EditarDietas).then(() => {
  //    console.log('Dieta añadida correctamente!');
  //    this.EditarDietas = {} as Dietas;
  //  }, (error) => {
  //    console.error(error);
  //  });
  //}

  editar() {
    this.userService.actulizarUsuario();
  }
  guardar() {
    this.userService.actulizarUsuario();

  }
  eliminar() {
    this.userService.eliminarUsuario();
  }

}
