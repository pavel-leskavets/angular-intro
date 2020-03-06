import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserInfo} from '../../enum/user-info.enum';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss', '../../../app.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  private userKey: string = UserInfo.localStorageKey;

  public registrationForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService,
              private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.initRegistrationForm();
  }

  public initRegistrationForm(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      login: [null, [Validators.required, Validators.minLength(5)]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  public saveNewUser(): void {
    if (this.registrationForm.valid) {
      window.localStorage.setItem(this.userKey, JSON.stringify(this.registrationForm.value));
      this.authService.logIn();
      this.router.navigateByUrl('/login');
    }
  }

  public hasError(controlName: string, errorName: string): boolean {
    console.log(1)
    return this.registrationForm.controls[controlName].hasError(errorName);
  }
}
