import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForworddocPage } from './forworddoc.page';

describe('ForworddocPage', () => {
  let component: ForworddocPage;
  let fixture: ComponentFixture<ForworddocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForworddocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForworddocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
