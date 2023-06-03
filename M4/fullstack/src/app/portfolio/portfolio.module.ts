import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { VidaLaboralComponent } from './vida-laboral/vida-laboral.component';

@NgModule({
  declarations: [
    DatosPersonalesComponent,
    EstudiosComponent,
    VidaLaboralComponent,
  ],
  imports: [CommonModule],
  exports: [DatosPersonalesComponent, EstudiosComponent, VidaLaboralComponent],
})
export class PortfolioModule {}
