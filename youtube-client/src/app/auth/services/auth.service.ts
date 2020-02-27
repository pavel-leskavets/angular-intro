export class AuthService {
  public isAuthenticated: boolean = false;

  public logIn(): void {
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
