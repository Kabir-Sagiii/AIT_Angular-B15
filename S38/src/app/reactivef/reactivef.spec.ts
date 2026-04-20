import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivef } from './reactivef';

describe('Reactivef', () => {
  let component: Reactivef;
  let fixture: ComponentFixture<Reactivef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
