import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: ['']
})
export class IncrementadorComponent {
  @ViewChild('inputProgress') inputProgress: ElementRef;    

  @Input() leyenda: string = 'Leyenda';
  @Input() progress:number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  onChanges() {
    // let elementHTML:any = document.getElementsByName('progreso')[0];

    this.verificarProgress()

    // elementHTML.value = this.progress;
    this.inputProgress.nativeElement.value = this.progress;

    this.emitirCambio();
  }


  cambiarValor(valor:number) {
    
    this.progress += valor;
    
    this.verificarProgress();
    
    this.inputProgress.nativeElement.focus();

    this.emitirCambio();
  }

  verificarProgress() {

    if (this.progress < 0 || this.progress == null) {
      this.progress = 0;
    }
    
    if (this.progress > 100){
      this.progress = 100;
    }
  }
  
  emitirCambio() {
    this.cambioValor.emit(this.progress);
  }
}
