import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilecard } from './profilecard';

describe('Profilecard', () => {
  let component: Profilecard;
  let fixture: ComponentFixture<Profilecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilecard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
