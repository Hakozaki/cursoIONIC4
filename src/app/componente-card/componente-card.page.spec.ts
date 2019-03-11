import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCardPage } from './componente-card.page';

describe('ComponenteCardPage', () => {
  let component: ComponenteCardPage;
  let fixture: ComponentFixture<ComponenteCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
