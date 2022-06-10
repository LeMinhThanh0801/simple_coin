import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/services/blockchain';
import { BlockchainService } from '../../services/blockchain.service';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements OnInit {
  @Input()
  public transactions: Array<Transaction> = [];

  constructor(public blockchainService: BlockchainService) {}

  ngOnInit() {}
}
