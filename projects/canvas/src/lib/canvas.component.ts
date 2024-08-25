import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'flowchat-canvas',
  standalone: true,
  imports: [ButtonModule],
  template: ` <p-button label="Submit" /> `,
  styles: ``,
})
export class CanvasComponent {}
