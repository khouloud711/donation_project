import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonAutresComponent } from './don-autres.component';

describe('DonAutresComponent', () => {
  let component: DonAutresComponent;
  let fixture: ComponentFixture<DonAutresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonAutresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonAutresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
