import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ComprasService} from "../compras.service";

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent {
   itens;

  constructor( private comprasService: ComprasService, private router: Router) {
    this.itens = comprasService.itens;

  }


  inserir(inputNome: HTMLInputElement, inputQuantidade: HTMLInputElement, inputValor: HTMLInputElement){
    let nome = inputNome.value;
    let quantidade = parseInt(inputQuantidade.value);
    let valor = parseFloat(inputValor.value);

    this.comprasService.inserirItens(nome, quantidade, valor);

    inputNome.value = '';
    inputQuantidade.value = '';
    inputValor.value = '';
  }

  trocarPagina() {
    this.router.navigate(['/lista']);
  }


}
