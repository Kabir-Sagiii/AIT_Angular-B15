import { TestBed } from '@angular/core/testing';

import { DataS } from './data-s';

describe('DataS', () => {
  let service: DataS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
