import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[tool-drop]',
  standalone: true,
})
export class CanvasToolDropDirective {
  canvas = inject(ElementRef);

  // Handle when a tool is dropped on the canvas
  @HostListener('drop', ['$event'])
  onToolDropOnCanvas(event: DragEvent, data: DataTransfer) {
    console.log('onToolDropOnCanvas', event.dataTransfer?.getData('tool'));
  }

  // Handle when a tool is dragover on the canvas
  @HostListener('dragover', ['$event'])
  onToolDragOverOnCanvas(event: DragEvent) {
    //required to make drop event work
    event.preventDefault();
    event.stopPropagation();
  }
}
