import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonVetementsComponent } from './don-vetements.component';

describe('DonVetementsComponent', () => {
  let component: DonVetementsComponent;
  let fixture: ComponentFixture<DonVetementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonVetementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonVetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
