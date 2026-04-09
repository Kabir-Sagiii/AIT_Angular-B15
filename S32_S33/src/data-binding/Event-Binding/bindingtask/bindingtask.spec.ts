import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bindingtask } from './bindingtask';

describe('Bindingtask', () => {
  let component: Bindingtask;
  let fixture: ComponentFixture<Bindingtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bindingtask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bindingtask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
