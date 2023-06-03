import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vida-laboral',
  templateUrl: './vida-laboral.component.html',
  styleUrls: ['./vida-laboral.component.css']
})
export class VidaLaboralComponent {

  proyectos: Map<string, string[]> = new Map<string, string[]>();
  mostrarProyectos: boolean = false;
  @Input() cabecera: string = '';
  @Output() valorMostrarProyectos: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.proyectos.set('GETRONICS', ['Servicio de Soporte | Ayto. Valladolid', 'Movipol | Policía Movilidad Ayto. Madrid', 'Albedo | GSS JCyL']);
    this.proyectos.set('ATOS', ['Servicios de tarificación | Orange España','Web de logística | SEUR','Oficina virtual | Correos']);
   }

  mostrarOcultarProyectos():void{
    if(this.mostrarProyectos){
      this.mostrarProyectos = false;
    } else {
      this.mostrarProyectos = true;
    }

    this.valorMostrarProyectos.emit(this.mostrarProyectos ? 'Verdadero' : 'Falso');
  }

}
