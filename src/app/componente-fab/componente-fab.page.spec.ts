import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFabPage } from './componente-fab.page';

describe('ComponenteFabPage', () => {
  let component: ComponenteFabPage;
  let fixture: ComponentFixture<ComponenteFabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteFabPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteFabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
