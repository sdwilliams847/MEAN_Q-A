import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAComponent } from './new-a.component';

describe('NewAComponent', () => {
  let component: NewAComponent;
  let fixture: ComponentFixture<NewAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
