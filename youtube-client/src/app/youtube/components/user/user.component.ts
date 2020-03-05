import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {UserInfo} from '../../../auth/enum/user-info.enum';
import {User} from '../../../auth/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private userKey: string = UserInfo.localStorageKey;

  public isLoggedIn: boolean;
  public userName: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  public ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.setUserName();
    });
  }

  public handleLogInLogOut(): void {
    if (this.isLoggedIn) {
      this.authService.logOut();
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public setUserName(): void {
    if (this.isLoggedIn) {
      const userName: User = JSON.parse(window.localStorage.getItem(this.userKey));
      this.userName = `${userName.firstName} ${userName.lastName}`;
    }
  }

}
