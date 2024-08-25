import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsContainerComponent } from './tools-container.component';

describe('ToolsContainerComponent', () => {
  let component: ToolsContainerComponent;
  let fixture: ComponentFixture<ToolsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
