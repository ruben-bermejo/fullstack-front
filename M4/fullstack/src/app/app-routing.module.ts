import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatosPersonalesComponent } from './portfolio/datos-personales/datos-personales.component';
import { EstudiosComponent } from './portfolio/estudios/estudios.component';
import { VidaLaboralComponent } from './portfolio/vida-laboral/vida-laboral.component';
import { FormularioComponent } from './portfolio/formulario/formulario.component';

const appRoutes: Routes = [
    { path: 'personal', component: DatosPersonalesComponent },
    { path: 'knowledge', component: EstudiosComponent },
    { path: 'experience', component: VidaLaboralComponent },
    { path: 'form', component: FormularioComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
]
})
export class AppRoutingModule { }
