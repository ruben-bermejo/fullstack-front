import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CityOption, FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formularioTZ: FormGroup;
  cities: CityOption[] = [];
  cityDateTime: string = '';

  constructor(private service: FormularioService){

    this.formularioTZ = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        ciudad: new FormControl([], Validators.required)
      }
    );

    this.cities = service.obtenerCiudades();

  }

  isFieldValid(field: string) {
    return !this.formularioTZ.get(field)!.valid && this.formularioTZ.get(field)!.touched;
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field),
    };
  }

  getCityData():void {
    console.log(this.formularioTZ.controls);
    this.service.obtenerDatosHorarios(this.formularioTZ.get('ciudad')?.value).subscribe(data => {
      console.log(data);
      this.cityDateTime = `La fecha y hora actual en ${data.timezone.split('/')[1]} es ${new Date(data.datetime.substring(0,23)).toLocaleString()}`;
    });
  }

}
