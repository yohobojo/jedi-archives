import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlanetService } from '../planets.service.js';
import { Planet } from '../planet';
import { ModalComponent } from '../modal/modal.component.js';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(): void {
    this.planetService.getPlanets().subscribe((planets) => {
      this.planets = [...this.planets, ...planets];
    });
  }
}
