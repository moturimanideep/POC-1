import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendComponent } from './send/send.component';
import { ReceiveComponent } from './receive/receive.component';
import { CreateComponent } from './create/create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { WheaderComponent } from './wheader/wheader.component'
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'send', component: SendComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'create', component: CreateComponent}
]

@NgModule({
  imports: [
    CommonModule, RouterModule, MatButtonModule, MatFormFieldModule, MatCardModule, 
    MatInputModule, RouterModule.forRoot(routes), FlexLayoutModule, MatToolbarModule
  ],
  declarations: [DashboardComponent, SendComponent, ReceiveComponent, CreateComponent, WheaderComponent]
})
export class WalletModule { }
