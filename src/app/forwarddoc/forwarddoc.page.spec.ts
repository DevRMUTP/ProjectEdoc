import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwarddocPage } from './forwarddoc.page';

describe('ForwarddocPage', () => {
  let component: ForwarddocPage;
  let fixture: ComponentFixture<ForwarddocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForwarddocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForwarddocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
