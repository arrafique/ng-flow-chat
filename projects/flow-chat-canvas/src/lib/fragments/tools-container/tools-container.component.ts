import { Component } from '@angular/core';
import { ToolDragDirective } from '../../directives/tool-drag/tool-drag.directive';

@Component({
  selector: 'fc-tools-container',
  standalone: true,
  imports: [ToolDragDirective],
  templateUrl: './tools-container.component.html',
  styleUrl: './tools-container.component.scss',
})
export class ToolsContainerComponent {}
