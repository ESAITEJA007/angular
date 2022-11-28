import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxpageComponent } from './inboxpage.component';

describe('InboxpageComponent', () => {
  let component: InboxpageComponent;
  let fixture: ComponentFixture<InboxpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InboxpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
