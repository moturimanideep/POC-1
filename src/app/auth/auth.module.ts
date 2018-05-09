import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
// import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'setpassword', component: SetpasswordComponent}
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes), FlexLayoutModule, MatButtonModule, MatFormFieldModule, MatCardModule, FormsModule, ReactiveFormsModule, MatInputModule
  ],
  providers: [AuthService],
  declarations: [LoginComponent, RegisterComponent, SetpasswordComponent, LandingpageComponent]
})
export class AuthModule { }
