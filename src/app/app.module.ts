import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AuthModule, WalletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
