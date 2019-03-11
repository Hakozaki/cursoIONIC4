import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBadgePage } from './componente-badge.page';

describe('ComponenteBadgePage', () => {
  let component: ComponenteBadgePage;
  let fixture: ComponentFixture<ComponenteBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
