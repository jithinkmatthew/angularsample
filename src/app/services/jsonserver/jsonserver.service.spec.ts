import { TestBed, inject } from '@angular/core/testing';

import { JsonserverService } from './jsonserver.service';

describe('JsonserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonserverService]
    });
  });

  it('should be created', inject([JsonserverService], (service: JsonserverService) => {
    expect(service).toBeTruthy();
  }));
});
