import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../compras.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  estatistica;


  constructor(private comprasService: ComprasService) {
    this.estatistica = comprasService.estatisticas;
  }

  ngOnInit() {
  }

}
