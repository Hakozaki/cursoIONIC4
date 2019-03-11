import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModalInternoPage } from './componente-modal-interno.page';

describe('ComponenteModalInternoPage', () => {
  let component: ComponenteModalInternoPage;
  let fixture: ComponentFixture<ComponenteModalInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteModalInternoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteModalInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
