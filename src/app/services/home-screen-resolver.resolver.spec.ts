import { TestBed } from '@angular/core/testing';

import { HomeScreenResolverResolver } from './home-screen-resolver.resolver';

describe('HomeScreenResolverResolver', () => {
  let resolver: HomeScreenResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomeScreenResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
