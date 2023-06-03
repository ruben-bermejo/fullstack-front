import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
})
export class DatosPersonalesComponent {
  nombre: string = 'JOSÉ RUBÉN';
  apellidos: string = 'bermejo sanz';
  fechaNacimiento: Date = new Date(1977, 2, 12);
  ciudad: string = 'Valladolid';
  direccion: string = 'Calle Miño, Laguna de Duero';
  telefono: number = 983555555;
  email: string = 'Jose-Ruben.Bermejo@Getronics.com';
  dni: string = '12345678z';

  @Input() cabecera: string = '';
}
