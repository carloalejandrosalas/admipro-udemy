import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;


  constructor() {

    this.subscription = this.regresaObservable()
    // .pipe(retry(2))
    .subscribe(
    numero => console.log(numero),
    err => console.error(err),
    () => console.log('Se ha terminado el observador'));

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('La pagina se ha cerrado');
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( () => {
        
        contador++;

        let obj = {
          valor: contador
        };

        observer.next(obj);

        // if (contador == 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador == 2) {
        //   clearInterval(intervalo);
        //   observer.error('Hubo un error');
        // } 
        
      }, 1000)
    }).pipe( 
      map( resp => resp.valor),
      filter( valor => (valor % 2) === 0 ) 
    );
  }
}
