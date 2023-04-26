import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarVotoComponent } from './registrar-voto.component';

describe('RegistrarVotoComponent', () => {
  let component: RegistrarVotoComponent;
  let fixture: ComponentFixture<RegistrarVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarVotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
