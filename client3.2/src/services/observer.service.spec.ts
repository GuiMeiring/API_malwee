import { TestBed } from '@angular/core/testing';

import { ObserverService } from './observer.service';

describe('ObserverService', () => {
  let service: ObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
