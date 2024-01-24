import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StarshipService } from '../starships.service.js';
import { Starship } from '../starship';
import { ModalComponent } from '../modal/modal.component.js';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(): void {
    this.starshipService.getStarships().subscribe((starships) => {
      this.starships = [...this.starships, ...starships];
    });
  }
}
