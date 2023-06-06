import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  constructor(private http: HttpClient) {}

  obtenerCiudades(): CityOption[] {
    return [
      { name: 'Johannesburg', value: 'Africa/Johannesburg' },
      { name: 'Madrid', value: 'Europe/Madrid' },
      { name: 'New York', value: 'America/New_York' },
      { name: 'Sydney', value: 'Australia/Sydney' },
      { name: 'Tokyo', value: 'Asia/Tokyo' },
    ];
  }

  obtenerDatosHorarios(city: string): Observable<any> {
    return this.http
      .get('http://worldtimeapi.org/api/timezone/' + city);
  }

}

export interface CityOption {
  name: string;
  value: string;
}

export interface CityDateTime {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}
