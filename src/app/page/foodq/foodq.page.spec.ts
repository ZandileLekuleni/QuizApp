import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodqPage } from './foodq.page';

describe('FoodqPage', () => {
  let component: FoodqPage;
  let fixture: ComponentFixture<FoodqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
