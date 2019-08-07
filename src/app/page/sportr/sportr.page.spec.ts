import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportrPage } from './sportr.page';

describe('SportrPage', () => {
  let component: SportrPage;
  let fixture: ComponentFixture<SportrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
