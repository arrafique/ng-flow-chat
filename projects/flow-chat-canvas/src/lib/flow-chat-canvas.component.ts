import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TextDialogComponent } from '../../../flow-chat-ui/src/public-api';
import { CanvasPanningDirective } from './directives/canvas-panning/canvas-panning.directive';
import { CanvasToolDropDirective } from './directives/tool-drop/tool-drop.directive';
import { ToolsContainerComponent } from './fragments/tools-container/tools-container.component';

@Component({
  selector: 'flow-chat-canvas',
  standalone: true,
  imports: [
    NgClass,
    TextDialogComponent,
    ToolsContainerComponent,
    CanvasPanningDirective,
    CanvasToolDropDirective,
  ],

  templateUrl: `./flow-chat-canvas.component.html`,
  styleUrls: [`./flow-chat-canvas.component.scss`],
})
export class FlowChatCanvasComponent {}
