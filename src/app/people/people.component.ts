import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from '../people.service';
import { PeopleResult, Person } from '../person';
import { ModalComponent } from '../modal/modal.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-people',
  standalone: true,
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  imports: [NgFor, HttpClientModule, ModalComponent, MatButtonModule],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];
  peopleResult: PeopleResult = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.peopleService.getPeople().subscribe((people) => {
      this.people = [...this.people, ...people];
    });
  }
}
