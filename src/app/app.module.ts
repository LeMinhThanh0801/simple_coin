import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlockchainService } from './services/blockchain.service';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, BlockchainViewerComponent, BlockViewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
