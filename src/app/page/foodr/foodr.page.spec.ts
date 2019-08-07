import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodrPage } from './foodr.page';

describe('FoodrPage', () => {
  let component: FoodrPage;
  let fixture: ComponentFixture<FoodrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
