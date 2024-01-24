import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Planet, PlanetResult } from './planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  private planetUrl = 'https://swapi.dev/api/planets/';

  getPlanets(): Observable<Planet[]> {
    return this.fetchAllPages(this.planetUrl);
  }
  private fetchAllPages(url: string): Observable<Planet[]> {
    return this.http.get<PlanetResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<PlanetResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
