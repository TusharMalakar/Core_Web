import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversatioinComponent } from './conversatioin.component';

describe('ConversatioinComponent', () => {
  let component: ConversatioinComponent;
  let fixture: ComponentFixture<ConversatioinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversatioinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversatioinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
