import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDateTimePage } from './componente-date-time.page';

describe('ComponenteDateTimePage', () => {
  let component: ComponenteDateTimePage;
  let fixture: ComponentFixture<ComponenteDateTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteDateTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDateTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
