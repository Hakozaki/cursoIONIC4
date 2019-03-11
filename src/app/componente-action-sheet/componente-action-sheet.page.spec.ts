import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteActionSheetPage } from './componente-action-sheet.page';

describe('ComponenteActionSheetPage', () => {
  let component: ComponenteActionSheetPage;
  let fixture: ComponentFixture<ComponenteActionSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteActionSheetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
