import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjetBackComponent } from './list-projet-back.component';

describe('ListProjetBackComponent', () => {
  let component: ListProjetBackComponent;
  let fixture: ComponentFixture<ListProjetBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProjetBackComponent]
    });
    fixture = TestBed.createComponent(ListProjetBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
