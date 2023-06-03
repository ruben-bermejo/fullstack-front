import { Component } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {

  nombre: string = 'José Rubén';
  apellidos: string = 'Bermejo Sanz';
  fechaNacimiento: string = '12/03/1977';
  ciudad: string = 'Valladolid';

}
