import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  
  constructor(public __ajustes: SettingsService ) { }
  
  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link_elem: any){

    this.aplicarCheck(link_elem);

    this.__ajustes.aplicarTema(tema);

  }

  aplicarCheck(link_elem) {
    
    let selectores:any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link_elem.classList.add('working');

  }

  colocarCheck() {
    let selectores:any = document.getElementsByClassName('selector');
    
    let tema = this.__ajustes.ajustes.tema;

    for (let ref of selectores) {
      
      if (ref.getAttribute('data-theme') === tema) {

        ref.classList.add('working');

        break;

      }

    }
  }

}
