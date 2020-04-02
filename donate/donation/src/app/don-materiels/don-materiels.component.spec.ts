import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonMaterielsComponent } from './don-materiels.component';

describe('DonMaterielsComponent', () => {
  let component: DonMaterielsComponent;
  let fixture: ComponentFixture<DonMaterielsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonMaterielsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonMaterielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
