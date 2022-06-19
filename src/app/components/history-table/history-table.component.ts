import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/services/blockchain';
import { BlockchainService } from '../../services/blockchain.service';
@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css'],
})
export class HistoryTableComponent implements OnInit {
  @Input()
  public transactions: Array<Transaction> = [];

  constructor(public blockchainService: BlockchainService) {}

  ngOnInit() {}
}
