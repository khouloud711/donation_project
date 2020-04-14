import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDonsComponent } from './liste-dons.component';

describe('ListeDonsComponent', () => {
  let component: ListeDonsComponent;
  let fixture: ComponentFixture<ListeDonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
