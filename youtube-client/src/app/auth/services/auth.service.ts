import {UserInfo} from '../enum/user-info.enum';

export class AuthService {

  private localStorageKey: string = UserInfo.isLogin;

  public isAuthenticated: boolean = JSON.parse(window.localStorage.getItem(this.localStorageKey))
    ? JSON.parse(window.localStorage.getItem(this.localStorageKey))
    : false;

  public logIn(): void {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(true));
    this.isAuthenticated = true;
  }

  public logOut(): void {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
