import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Film, FilmResult } from './film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms(): Observable<Film[]> {
    return this.fetchAllPages(this.filmsUrl);
  }
  private fetchAllPages(url: string): Observable<Film[]> {
    return this.http.get<FilmResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<FilmResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
