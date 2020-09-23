import {Injectable, OnDestroy} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {

  private isLoggedIn: boolean;
  private subscription$: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.subscription$ = this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  public canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
