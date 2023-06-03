import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaLaboralComponent } from './vida-laboral.component';

describe('VidaLaboralComponent', () => {
  let component: VidaLaboralComponent;
  let fixture: ComponentFixture<VidaLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidaLaboralComponent]
    });
    fixture = TestBed.createComponent(VidaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
