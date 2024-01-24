import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Person, PeopleResult } from './person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  private peopleUrl = 'https://swapi.dev/api/people/';

  getPeople(): Observable<Person[]> {
    return this.fetchAllPages(this.peopleUrl);
  }
  private fetchAllPages(url: string): Observable<Person[]> {
    return this.http.get<PeopleResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<PeopleResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
