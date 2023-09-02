import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTachesComponent } from './create-taches.component';

describe('CreateTachesComponent', () => {
  let component: CreateTachesComponent;
  let fixture: ComponentFixture<CreateTachesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTachesComponent]
    });
    fixture = TestBed.createComponent(CreateTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
