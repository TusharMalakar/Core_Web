import { TestBed } from '@angular/core/testing';

import { ConversatioinsService } from './conversation.service';

describe('ConversationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversatioinsService = TestBed.get(ConversatioinsService);
    expect(service).toBeTruthy();
  });
});
