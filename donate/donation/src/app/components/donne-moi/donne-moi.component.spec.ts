import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneMoiComponent } from './donne-moi.component';

describe('DonneMoiComponent', () => {
  let component: DonneMoiComponent;
  let fixture: ComponentFixture<DonneMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
