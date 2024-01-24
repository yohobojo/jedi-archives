import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { FilmsService } from './films.service';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people.service';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipService } from './starships.service';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetService } from './planets.service';
import { SpeciessComponent } from './speciess/speciess.component';
import { SpeciesService } from './speciess.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './vehicles.service';
import { ModalService } from './modal.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    HomeComponent,
    FilmsComponent,
    PeopleComponent,
    StarshipsComponent,
    PlanetsComponent,
    SpeciessComponent,
    VehiclesComponent,
    MatButtonModule,
  ],
  providers: [
    FilmsService,
    PeopleService,
    StarshipService,
    PlanetService,
    SpeciesService,
    VehicleService,
    ModalService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jedi Archives';
}
