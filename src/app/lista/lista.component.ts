import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ComprasService} from "../compras.service";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  itens;

  constructor(private comprasService: ComprasService, private router: Router) {
    this.itens = comprasService.itens;
  }

  trocarPagina() {
    this.router.navigate(['/']);
  }

  apagar(item){
    item.comprado = true;
    console.log(this.itens);
  }

}
