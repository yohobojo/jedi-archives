import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehicleService } from '../vehicles.service.js';
import { Vehicle } from '../vehicle';
import { ModalComponent } from '../modal/modal.component.js';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles = [...this.vehicles, ...vehicles];
    });
  }
}
