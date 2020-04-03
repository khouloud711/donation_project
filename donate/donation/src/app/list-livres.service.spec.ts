import { TestBed } from '@angular/core/testing';

import { ListLivresService } from './list-livres.service';

describe('ListLivresService', () => {
  let service: ListLivresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLivresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
