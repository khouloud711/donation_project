import { TestBed } from '@angular/core/testing';

import { ListDonsService } from './list-dons.service';

describe('ListDonsService', () => {
  let service: ListDonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
