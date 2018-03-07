import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQComponent } from './new-q.component';

describe('NewQComponent', () => {
  let component: NewQComponent;
  let fixture: ComponentFixture<NewQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
