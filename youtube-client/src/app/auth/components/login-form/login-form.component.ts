import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {UserInfo} from '../../enum/user-info.enum';
import {UserValidator} from '../../Validators/user-validator';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', '../../../app.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  private userKey: string = UserInfo.localStorageKey;
  private user: User;
  private subscription$: Subscription;

  public loginForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.initLoginForm();
    this.redirectToMainPage();
    this.user = JSON.parse(window.localStorage.getItem(this.userKey));
  }

  public redirectToMainPage(): void {
    this.subscription$ = this.authService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigateByUrl('/main-page');
      }
    });
  }

  public initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, Validators.required]
    });
  }

  public toMainPage(): void {
    this.userInvalid();
    const login: string = this.loginForm.get('login').value;
    const password: string = this.loginForm.get('password').value;
    if (this.loginForm.valid && this.user.login === login && this.user.password === password) {
      this.authService.logIn();
      this.router.navigateByUrl('/main-page');
    }
  }

  public userInvalid(): void {
    const userLogin: AbstractControl = this.loginForm.get('login');
    const userPassword: AbstractControl = this.loginForm.get('password');
    if (this.user) {
      userLogin.setValidators(UserValidator.checkUserInfo(userLogin, this.user.login));
      userPassword.setValidators(UserValidator.checkUserInfo(userPassword, this.user.password));
    }
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
