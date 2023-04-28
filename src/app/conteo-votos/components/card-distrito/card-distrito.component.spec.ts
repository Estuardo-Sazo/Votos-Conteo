import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDistritoComponent } from './card-distrito.component';

describe('CardDistritoComponent', () => {
  let component: CardDistritoComponent;
  let fixture: ComponentFixture<CardDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDistritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
