import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDform } from './template-dform';

describe('TemplateDform', () => {
  let component: TemplateDform;
  let fixture: ComponentFixture<TemplateDform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
