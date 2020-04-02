import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonProduitsComponent } from './don-produits.component';

describe('DonProduitsComponent', () => {
  let component: DonProduitsComponent;
  let fixture: ComponentFixture<DonProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
