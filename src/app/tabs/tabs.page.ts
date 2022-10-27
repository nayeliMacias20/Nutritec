import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public router:Router, public userService:UsuariosService) {}
  logout(){
    localStorage.removeItem('userApp')
    this.router.navigate(['/login'])
  }

}
