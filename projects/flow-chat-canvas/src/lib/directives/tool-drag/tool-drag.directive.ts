import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[tool-drag]',
  standalone: true,
})
export class ToolDragDirective {
  canvas = inject(ElementRef);

  @HostListener('dragstart', ['$event'])
  onToolDragStart(event: DragEvent) {
    event.dataTransfer?.setData('tool', this.canvas.nativeElement.dataset.tool);
    event.dataTransfer?.setData(
      'action',
      this.canvas.nativeElement.dataset.nodeAction
    );
  }
}
