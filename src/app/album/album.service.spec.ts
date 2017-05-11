import { TestBed, inject } from '@angular/core/testing';

import { AlbumService } from './album.service';

describe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService]
    });
  });

  it('should ...', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
