import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLoggedIn: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  public canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
