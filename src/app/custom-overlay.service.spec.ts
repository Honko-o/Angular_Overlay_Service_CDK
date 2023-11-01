import { TestBed } from '@angular/core/testing';

import { CustomOverlayService } from './custom-overlay.service';

describe('CustomOverlayService', () => {
  let service: CustomOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
