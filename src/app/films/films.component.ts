import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilmsService } from '../films.service';
import { Film } from '../film';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss',
})
export class FilmsComponent implements OnInit {
  films: Film[] = [];
  showDialog = false;

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe((film) => {
      this.films = [...this.films, ...film];
    });
  }
}
