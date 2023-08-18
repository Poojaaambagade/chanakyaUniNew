import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersuccesComponent } from './ownersucces.component';

describe('OwnersuccesComponent', () => {
  let component: OwnersuccesComponent;
  let fixture: ComponentFixture<OwnersuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnersuccesComponent]
    });
    fixture = TestBed.createComponent(OwnersuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
