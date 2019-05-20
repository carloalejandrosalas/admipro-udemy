import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progress1:number = 30;
  progress2:number = 20;


  constructor() { }

  ngOnInit() {
  }

  mostrar_valor(event: number) {
    console.log('cambiar valor', event);
  }

}
