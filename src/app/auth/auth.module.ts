import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { AuthService } from './auth.service';
import { Routes, Router, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setpassword', component: SetpasswordComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent, SetpasswordComponent]
})
export class AuthModule { }
