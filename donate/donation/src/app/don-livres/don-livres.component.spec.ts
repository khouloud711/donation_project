import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonLivresComponent } from './don-livres.component';

describe('DonLivresComponent', () => {
  let component: DonLivresComponent;
  let fixture: ComponentFixture<DonLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
