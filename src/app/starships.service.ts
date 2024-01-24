import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Starship, StarshipResult } from './starship';

@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  constructor(private http: HttpClient) {}

  private starshipUrl = 'https://swapi.dev/api/starships/';

  getStarships(): Observable<Starship[]> {
    return this.fetchAllPages(this.starshipUrl);
  }
  private fetchAllPages(url: string): Observable<Starship[]> {
    return this.http.get<StarshipResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<StarshipResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
