import { TestBed } from '@angular/core/testing';

import { KategoriakService } from './kategoriak.service';

describe('KategoriakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KategoriakService = TestBed.get(KategoriakService);
    expect(service).toBeTruthy();
  });
});
