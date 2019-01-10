import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthService) {
    this.form = fb.group({
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      password: ['test@1', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email)
      this.myRoute.navigate(["home"]);
    }
  }

}
