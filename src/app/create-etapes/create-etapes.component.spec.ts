import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEtapesComponent } from './create-etapes.component';

describe('CreateEtapesComponent', () => {
  let component: CreateEtapesComponent;
  let fixture: ComponentFixture<CreateEtapesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEtapesComponent]
    });
    fixture = TestBed.createComponent(CreateEtapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
