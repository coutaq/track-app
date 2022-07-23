import { TestBed } from '@angular/core/testing';

import { TelegramLoginService } from './telegram-login.service';

describe('TelegramLoginService', () => {
  let service: TelegramLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
