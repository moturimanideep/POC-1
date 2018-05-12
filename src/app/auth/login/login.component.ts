import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../../apex/entities/login.entity';
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserDetailsForm: FormGroup;
  login : Login = new Login;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder , private router: Router, private authService: AuthService) { 
    this.UserDetailsForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'password': ['',  Validators.compose([Validators.required, Validators.minLength(5)])]
     });
     //this.getDummyList();
  }

  ngOnInit() {
  }
  loginUser(){
    // console.log(this.login);
    // this.authService.login(this.login)
    //     .subscribe(
    //         data => {
    //           console.log(data)
    //           this.authService.storageSave(data);
    //           this.router.navigate(['dashboard']);
    //         },
    //         error => {
    //              console.log(error);
    //              this.showServerError="OOPS! Something went wrong please try again"   
    //         });
} 

}
