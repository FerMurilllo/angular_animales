import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecieformComponent } from './especieform.component';

describe('EspecieformComponent', () => {
  let component: EspecieformComponent;
  let fixture: ComponentFixture<EspecieformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecieformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecieformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
