import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childcomp2Component } from './childcomp2.component';

describe('Childcomp2Component', () => {
  let component: Childcomp2Component;
  let fixture: ComponentFixture<Childcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
