import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesService } from '../speciess.service.js';
import { Species } from '../species';
import { ModalComponent } from '../modal/modal.component.js';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-speciess',
  standalone: true,
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
  templateUrl: './speciess.component.html',
  styleUrl: './speciess.component.scss',
})
export class SpeciessComponent implements OnInit {
  speciess: Species[] = [];

  constructor(private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.getSpeciess();
  }

  getSpeciess(): void {
    this.speciesService.getSpeciess().subscribe((speciess) => {
      this.speciess = [...this.speciess, ...speciess];
    });
  }
}
