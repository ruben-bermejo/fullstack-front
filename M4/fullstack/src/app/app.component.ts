import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.navigate(['/personal']);
  }

  showMostrarProyectosValue(valorNuevo: string) {
    console.log(
      'El valor de la variable @Output mostrarProyectos es: ' + valorNuevo
    );
  }
}
