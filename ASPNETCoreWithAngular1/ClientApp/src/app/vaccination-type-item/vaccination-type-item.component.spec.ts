import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationTypeItemComponent } from './vaccination-type-item.component';

describe('VaccinationTypeItemComponent', () => {
  let component: VaccinationTypeItemComponent;
  let fixture: ComponentFixture<VaccinationTypeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationTypeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationTypeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
