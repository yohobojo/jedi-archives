import { TestBed } from '@angular/core/testing';

import { SpeciesService } from './speciess.service';

describe('SpeciessService', () => {
  let service: SpeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
