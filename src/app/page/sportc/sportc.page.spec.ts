import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportcPage } from './sportc.page';

describe('SportcPage', () => {
  let component: SportcPage;
  let fixture: ComponentFixture<SportcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
