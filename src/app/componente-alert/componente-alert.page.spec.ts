import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAlertPage } from './componente-alert.page';

describe('ComponenteAlertPage', () => {
  let component: ComponenteAlertPage;
  let fixture: ComponentFixture<ComponenteAlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAlertPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
