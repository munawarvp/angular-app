import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistDialogComponent } from './blacklist-dialog.component';

describe('BlacklistDialogComponent', () => {
  let component: BlacklistDialogComponent;
  let fixture: ComponentFixture<BlacklistDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlacklistDialogComponent]
    });
    fixture = TestBed.createComponent(BlacklistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
