import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsComponent } from './logins.component';

describe('LoginsComponent', () => {
  let component: LoginsComponent;
  let fixture: ComponentFixture<LoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
