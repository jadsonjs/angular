import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  // declare a array of item
  fixItens = [
    {etiqueta: "AA1122", descricao: 'Primeiro Item', dataAquisicao: new Date()},
    {etiqueta: "BB3344", descricao: 'Segundo Item', dataAquisicao: new Date()}
  ];

  // array will receibe the list of backend
  itens = [] ;

  constructor(private itemService: ItemService) { }

  // call after the object is created (after constructor)
  ngOnInit() {
      this.listar();
  }

  listar(){
    // subscribe in the observable return by the service
    // and use a arrow funcition to receive this data
    this.itemService.getItens().subscribe(dados => this.itens = dados );
  }

  // called by the form
  adicionar(f: FormControl){
     console.log(f.value);
     this.itemService.postItem(f.value).subscribe(
        () => { f.reset(); this.listar();}
     );
  }

}
