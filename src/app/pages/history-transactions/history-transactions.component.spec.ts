import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTransactionsComponent } from './history-transactions.component';

describe('HistoryTransactionsComponent', () => {
  let component: HistoryTransactionsComponent;
  let fixture: ComponentFixture<HistoryTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
