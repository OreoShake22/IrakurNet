import { TestBed } from '@angular/core/testing';

import { RedditApiService } from './reddit-api.service';

describe('RedditApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedditApiService = TestBed.get(RedditApiService);
    expect(service).toBeTruthy();
  });
});
