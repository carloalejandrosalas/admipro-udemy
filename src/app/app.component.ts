import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tareas = [{
    titulo: 'Terminar curso de Angular Avanzado',
    completed: false,
    fecha_registrado: 1558312976791
  }];
}
