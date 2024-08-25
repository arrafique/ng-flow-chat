import { Component } from '@angular/core';
import { FlowChatCanvasComponent } from '../../projects/flow-chat-canvas/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlowChatCanvasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FlowChat';
}
