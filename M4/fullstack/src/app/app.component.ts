import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fullstack';
  public cabeceras: Map<string, string> = new Map<string, string>();

  constructor() {
    this.cabeceras.set('PERSONAL', 'datos personales');
    this.cabeceras.set('ESTUDIOS', 'formación');
    this.cabeceras.set('LABORAL', 'vida laboral');
   }

   showMostrarProyectosValue(valorNuevo: string){
    console.log('El valor de la variable @Output mostrarProyectos es: ' + valorNuevo);
   }

}
