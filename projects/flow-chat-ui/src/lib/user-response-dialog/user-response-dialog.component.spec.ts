import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResponseDialogComponent } from './user-response-dialog.component';

describe('UserResponseDialogComponent', () => {
  let component: UserResponseDialogComponent;
  let fixture: ComponentFixture<UserResponseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserResponseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
