import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidatComponent } from './add-candidat.component';

describe('AddCandidatComponent', () => {
  let component: AddCandidatComponent;
  let fixture: ComponentFixture<AddCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandidatComponent]
    });
    fixture = TestBed.createComponent(AddCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
