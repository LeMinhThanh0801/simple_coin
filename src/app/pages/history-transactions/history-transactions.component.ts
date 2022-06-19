import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/services/blockchain';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-history-transactions',
  templateUrl: './history-transactions.component.html',
  styleUrls: ['./history-transactions.component.css'],
})
export class HistoryTransactionsComponent implements OnInit {
  public transactions: Array<Transaction> = [];

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {
    const blockchain = this.blockchainService.blockchainInstance;
    this.transactions = blockchain.getAllTransaction();
  }
}
