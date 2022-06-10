import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlockchainService } from './services/blockchain.service';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    SettingsComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent,
    TransactionsTableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
