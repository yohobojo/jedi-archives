import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Species, SpeciesResult } from './species';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  constructor(private http: HttpClient) {}

  private speciesUrl = 'https://swapi.dev/api/species/';

  getSpeciess(): Observable<Species[]> {
    return this.fetchAllPages(this.speciesUrl);
  }
  private fetchAllPages(url: string): Observable<Species[]> {
    return this.http.get<SpeciesResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<SpeciesResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
