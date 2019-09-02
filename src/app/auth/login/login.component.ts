import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  title = "This is title";
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.authForm = this.fb.group({
      username : ['', Validators.required],
      password: ['',Validators.required]
    });
  }
  
  onSubmit(){

    console.log(this.authForm.value);

    //send the request to backend
    this.authService.login(this.authForm.value)
    .subscribe(data => {
      console.log(data);
      this.jwtService.setToken(data.token);
      this.router.navigate(['dashboard']);
    },
    err => console.error(err));
  }

}
