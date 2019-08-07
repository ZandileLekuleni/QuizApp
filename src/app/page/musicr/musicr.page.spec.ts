import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicrPage } from './musicr.page';

describe('MusicrPage', () => {
  let component: MusicrPage;
  let fixture: ComponentFixture<MusicrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
