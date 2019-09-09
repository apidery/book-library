import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForms: FormGroup;
  errorMsg: string;


  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService, 
              private router: Router) { }


  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signUpForms = this.formBuilder.group( {
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit(){
    const email = this.signUpForms.get('email').value;
    const password = this.signUpForms.get('password').value;
    this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
  
}
