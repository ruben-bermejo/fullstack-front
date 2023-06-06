import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { VidaLaboralComponent } from './vida-laboral/vida-laboral.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioService } from './formulario/formulario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DatosPersonalesComponent,
    EstudiosComponent,
    VidaLaboralComponent,
    FormularioComponent,
  ],
  providers: [FormularioService],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [DatosPersonalesComponent, EstudiosComponent, VidaLaboralComponent],
})
export class PortfolioModule {}
