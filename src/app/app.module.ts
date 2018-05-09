import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { WalletModule } from './wallet/wallet.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './auth/header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatSidenavModule, MatIconModule, MatTooltipModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule, AuthModule, WalletModule, RouterModule, FlexLayoutModule, BrowserAnimationsModule, MatSidenavModule, MatButtonModule, MatIconModule, MatTooltipModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
