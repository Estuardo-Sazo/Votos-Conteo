import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoCandidatoComponent } from './voto-candidato.component';

describe('VotoCandidatoComponent', () => {
  let component: VotoCandidatoComponent;
  let fixture: ComponentFixture<VotoCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotoCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
