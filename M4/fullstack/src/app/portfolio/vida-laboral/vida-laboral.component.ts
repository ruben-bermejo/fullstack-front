import { Component } from '@angular/core';

@Component({
  selector: 'app-vida-laboral',
  templateUrl: './vida-laboral.component.html',
  styleUrls: ['./vida-laboral.component.css']
})
export class VidaLaboralComponent {

  proyectos: Map<string, string[]> = new Map<string, string[]>();

  mostrarProyectos():void{
    this.proyectos.set('GETRONICS', ['Servicio de Soporte | Ayto. Valladolid', 'Movipol | Policía Movilidad Ayto. Madrid', 'Albedo | GSS JCyL']);
    this.proyectos.set('ATOS', ['Servicios de tarificación | Orange España','Web de logística | SEUR','Oficina virtual | Correos']);
  }

}
