import { TestBed } from '@angular/core/testing';

import { FlowChatCanvasService } from './flow-chat-canvas.service';

describe('FlowChatCanvasService', () => {
  let service: FlowChatCanvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowChatCanvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
