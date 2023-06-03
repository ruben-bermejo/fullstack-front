import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  titulos: string[] = [];
  otros: string[] = [];
  certificaciones: string[] = [];

  @Input() cabecera: string = '';

  ngOnInit(): void {
    this.titulos = ['Licenciado en Química por la Universidad de Valladolid'];
    this.otros = ['(en curso) Máster en Full Stack Developer | Naxer'];
    this.certificaciones = [
      'Professional Scrum Master I | Scrum.org',
      'ISTQB Certified Tester, Foundation Level | International Software Quality Institute',
    ];
  }
}
