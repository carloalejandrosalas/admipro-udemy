import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {
  
  constructor() { 
    this.contarTres(1)
    .then( () => {
      console.log('termino');
    })
    .catch( () => {
      console.error('Hubo un error');
      
    })

  }

  ngOnInit() {
  }

  contarTres(num1:number) : Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);

    });
  }

}
