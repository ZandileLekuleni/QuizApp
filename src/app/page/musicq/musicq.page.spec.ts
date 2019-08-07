import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicqPage } from './musicq.page';

describe('MusicqPage', () => {
  let component: MusicqPage;
  let fixture: ComponentFixture<MusicqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
