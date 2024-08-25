import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowChatCanvasComponent } from './flow-chat-canvas.component';

describe('FlowChatCanvasComponent', () => {
  let component: FlowChatCanvasComponent;
  let fixture: ComponentFixture<FlowChatCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowChatCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowChatCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
