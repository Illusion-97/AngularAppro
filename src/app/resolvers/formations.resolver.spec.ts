import { TestBed } from '@angular/core/testing';

import { FormationsResolver } from './formations.resolver';

describe('FormationsResolver', () => {
  let resolver: FormationsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FormationsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
