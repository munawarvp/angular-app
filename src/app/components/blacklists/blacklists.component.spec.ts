import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistsComponent } from './blacklists.component';

describe('BlacklistsComponent', () => {
  let component: BlacklistsComponent;
  let fixture: ComponentFixture<BlacklistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlacklistsComponent]
    });
    fixture = TestBed.createComponent(BlacklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
