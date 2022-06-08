import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlockchainService } from './services/blockchain.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
