import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugOutputComponent } from './debug-output.component';

describe('DebugOutputComponent', () => {
  let component: DebugOutputComponent;
  let fixture: ComponentFixture<DebugOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebugOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
