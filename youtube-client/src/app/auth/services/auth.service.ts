import {UserInfo} from '../enum/user-info.enum';
import {BehaviorSubject} from 'rxjs';

export class AuthService {

  private localStorageKey: string = UserInfo.isLogin;

  public isAuthenticated: boolean = JSON.parse(window.localStorage.getItem(this.localStorageKey))
    ? JSON.parse(window.localStorage.getItem(this.localStorageKey))
    : false;

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated);

  public logIn(): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(true));
    this.isAuthenticated = true;
    this.isLoggedIn.next(true);
  }

  public logOut(): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(false));
    this.isAuthenticated = false;
    this.isLoggedIn.next(false);
  }
}
