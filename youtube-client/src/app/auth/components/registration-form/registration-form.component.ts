import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss', '../../../app.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public toMainPage(): void {
    this.router.navigateByUrl('/main-page');
  }
}
