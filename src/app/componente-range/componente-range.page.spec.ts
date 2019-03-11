import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRangePage } from './componente-range.page';

describe('ComponenteRangePage', () => {
  let component: ComponenteRangePage;
  let fixture: ComponentFixture<ComponenteRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteRangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
