import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { expand, map } from 'rxjs/operators';

import { Vehicle, VehicleResult } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  private vehicleUrl = 'https://swapi.dev/api/vehicles/';

  getVehicles(): Observable<Vehicle[]> {
    return this.fetchAllPages(this.vehicleUrl);
  }
  private fetchAllPages(url: string): Observable<Vehicle[]> {
    return this.http.get<VehicleResult>(url).pipe(
      expand((data) =>
        data.next ? this.http.get<VehicleResult>(data.next) : EMPTY
      ),
      map((data) => (data ? data.results : []))
    );
  }
}
