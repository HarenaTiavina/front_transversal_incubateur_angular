import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTachesComponent } from './details-taches.component';

describe('DetailsTachesComponent', () => {
  let component: DetailsTachesComponent;
  let fixture: ComponentFixture<DetailsTachesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsTachesComponent]
    });
    fixture = TestBed.createComponent(DetailsTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
