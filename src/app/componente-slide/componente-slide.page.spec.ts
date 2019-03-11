import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSlidePage } from './componente-slide.page';

describe('ComponenteSlidePage', () => {
  let component: ComponenteSlidePage;
  let fixture: ComponentFixture<ComponenteSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSlidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
