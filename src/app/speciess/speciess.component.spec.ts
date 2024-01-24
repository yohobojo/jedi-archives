import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciessComponent } from './speciess.component';

describe('SpeciessComponent', () => {
  let component: SpeciessComponent;
  let fixture: ComponentFixture<SpeciessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeciessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeciessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
