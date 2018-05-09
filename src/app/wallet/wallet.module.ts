import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'send', component: SendComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'create', component: CreateComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [DashboardComponent, SendComponent, ReceiveComponent, CreateComponent]
})
export class WalletModule { }
