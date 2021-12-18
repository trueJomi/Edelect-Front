import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisTestComponent } from './this-test.component';

describe('ThisTestComponent', () => {
  let component: ThisTestComponent;
  let fixture: ComponentFixture<ThisTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
