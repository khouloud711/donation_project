import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonMeublesComponent } from './don-meubles.component';

describe('DonMeublesComponent', () => {
  let component: DonMeublesComponent;
  let fixture: ComponentFixture<DonMeublesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonMeublesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonMeublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
