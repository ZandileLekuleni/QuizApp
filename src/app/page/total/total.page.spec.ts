import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPage } from './total.page';

describe('TotalPage', () => {
  let component: TotalPage;
  let fixture: ComponentFixture<TotalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
