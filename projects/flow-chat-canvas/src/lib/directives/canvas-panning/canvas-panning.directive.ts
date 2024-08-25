import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[canvas-panning]',
  standalone: true,
})
export class CanvasPanningDirective {
  isPanning: boolean = false;
  startX = 0;
  startY = 0;
  currentTranslateX = 0;
  currentTranslateY = 0;
  canvas = inject(ElementRef);

  // Start panning when the mouse is pressed down
  @HostListener('mousedown', ['$event'])
  onCanvasMouseDown(e: MouseEvent) {
    this.isPanning = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    const matrix = new DOMMatrix(
      getComputedStyle(this.canvas.nativeElement).transform
    );
    this.currentTranslateX = matrix.m41;
    this.currentTranslateY = matrix.m42;
    this.canvas.nativeElement.style.cursor = 'grabbing'; // Change cursor to indicate panning
  }
  // Perform panning as the mouse is moved
  @HostListener('mousemove', ['$event'])
  onCanvasMouseMove(e: MouseEvent) {
    if (!this.isPanning) return;

    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;

    // Update the canvas position
    this.canvas.nativeElement.style.transform = `translate(${
      this.currentTranslateX + dx
    }px, ${this.currentTranslateY + dy}px)`;
  }

  // Stop panning when the mouse button is released
  @HostListener('mouseup', ['$event'])
  onCanvasMouseUp() {
    if (!this.isPanning) return;
    this.isPanning = false;
    this.canvas.nativeElement.style.cursor = 'grab'; // Revert cursor back to grab
  }
  // Optional: Stop panning if the mouse leaves the canvas area
  @HostListener('mouseleave', ['$event'])
  onCanvasMouseLeave() {
    if (!this.isPanning) return;

    this.isPanning = false;
    this.canvas.nativeElement.style.cursor = 'grab';
  }
}
