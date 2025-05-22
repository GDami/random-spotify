import { TestBed } from '@angular/core/testing';

import { FetchSpotifyService } from './fetch-spotify.service';

describe('FetchSpotifyService', () => {
  let service: FetchSpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSpotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
