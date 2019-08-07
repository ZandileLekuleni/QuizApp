import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportqPage } from './sportq.page';

describe('SportqPage', () => {
  let component: SportqPage;
  let fixture: ComponentFixture<SportqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
