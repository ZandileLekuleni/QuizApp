import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiccPage } from './musicc.page';

describe('MusiccPage', () => {
  let component: MusiccPage;
  let fixture: ComponentFixture<MusiccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiccPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
