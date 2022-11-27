import { TestBed } from '@angular/core/testing';

import { BestpizzasService } from './bestpizzas.service';

describe('BestpizzasService', () => {
  let service: BestpizzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestpizzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
