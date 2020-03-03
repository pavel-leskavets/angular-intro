import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {UserInfo} from '../../enum/user-info.enum';
import {LoginForm} from '../../models/loginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', '../../../app.component.scss']
})
export class LoginFormComponent implements OnInit {

  private userKey: string = UserInfo.localStorageKey;

  public loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.redirectToMainPage();
    this.initLoginForm();
  }

  public redirectToMainPage(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/main-page');
    }
  }

  public initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: null,
      password: null
    });
  }

  public toMainPage(): void {
    this.checkUser();
  }

  public checkUser(): void {
    const user: User =  JSON.parse(window.localStorage.getItem(this.userKey));
    const loginFormValue: LoginForm = this.loginForm.value;
    if (user.login === loginFormValue.login && user.password === loginFormValue.password) {
      this.authService.logIn();
      this.router.navigateByUrl('/main-page');
    }
  }
}
