import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Page, Planet, PlanetDto } from '../domain/planet';

const urlBase = 'https://swapi.dev/api/planets';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    const url = `${urlBase}`;
    return this.http
      .get<Page<PlanetDto>>(url)
      .pipe(map((data) => data.results.map((it) => toPlanet(it))));
  }

  getPlanetById(id: number): Observable<Planet> {
    const url = `${urlBase}/${encodeURIComponent(id)}`;
    return this.http.get<PlanetDto>(url).pipe(map((it) => toPlanet(it)));
  }
}

const toPlanet = (dto: PlanetDto): Planet => {
  // const obj = {
  //   ...dto,
  //   diameter: parseInt(dto.diameter, 10),
  //   orbital_period: +dto.orbital_period,
  //   population: +dto.population,
  //   created: new Date(Date.parse(dto.created)),
  //   edited: new Date(Date.parse(dto.edited)),
  // } as Planet;

  return {
    name: dto.name,
    climate: dto.climate,
    terrain: dto.terrain,
    diameter: parseInt(dto.diameter, 10),
    population: +dto.population,
    films: dto.films,
    residents: dto.residents,
    created: new Date(Date.parse(dto.created)),
    edited: new Date(Date.parse(dto.edited)),
  } as Planet;
};
