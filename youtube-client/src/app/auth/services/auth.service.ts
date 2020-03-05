import {UserInfo} from '../enum/user-info.enum';
import {BehaviorSubject} from 'rxjs';

export class AuthService {

  private localStorageKey: string = UserInfo.isLogin;

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isAuthenticated: boolean = JSON.parse(window.localStorage.getItem(this.localStorageKey))
    ? JSON.parse(window.localStorage.getItem(this.localStorageKey))
    : false;

  public logIn(): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(true));
    this.isAuthenticated = true;
    this.isLoggedIn.next(true);
  }

  public logOut(): void {
    this.isAuthenticated = false;
    this.isLoggedIn.next(false);
    window.localStorage.clear();
  }
}
