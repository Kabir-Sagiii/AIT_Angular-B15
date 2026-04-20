import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdteUser } from './updte-user';

describe('UpdteUser', () => {
  let component: UpdteUser;
  let fixture: ComponentFixture<UpdteUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdteUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdteUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
