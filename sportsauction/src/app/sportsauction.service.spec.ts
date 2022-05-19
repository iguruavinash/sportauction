import { TestBed } from '@angular/core/testing';

import { SportsauctionService } from './sportsauction.service';

describe('SportsauctionService', () => {
  let service: SportsauctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsauctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
