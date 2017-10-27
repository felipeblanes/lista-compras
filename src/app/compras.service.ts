import { Injectable } from '@angular/core';

@Injectable()
export class ComprasService {
  itens = [];
  estatisticas = {
    valorTotal: 0,
    quantidadeTotal: 0
  }

  constructor() {

  }

  inserirItens(nome: string, quantidade: number, valor: number){
    this.itens.push({
        nome: nome,
        quantidade: quantidade,
        valor: valor,
        comprado: false
      }
    )

    this.estatisticas.valorTotal = this.estatisticas.valorTotal + (valor*quantidade);
    this.estatisticas.quantidadeTotal = this.estatisticas.quantidadeTotal + quantidade;
    console.log(this.estatisticas.valorTotal);
    console.log(this.estatisticas.quantidadeTotal);
  }


}
