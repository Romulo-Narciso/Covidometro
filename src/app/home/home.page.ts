import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';

class Estado {
  constructor(
   public nome : String,
   public casos : Number,
   public mortes : Number,
   public vacinacao : Number ){}
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public itens = [
    new Estado("São Paulo",420,0,0),
    new Estado("Rio de Janeiro",171,0,0),
    new Estado("Paraíba",5,0,0),
    new Estado("Bahia",32,0,0),
    new Estado("Rio de Fevereiro",13,0,0),
    new Estado("Pernambuco",7,0,0),
  ]
  constructor() {}

}
