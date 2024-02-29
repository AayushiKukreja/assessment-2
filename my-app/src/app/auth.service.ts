export class AuthService {
  access = false;
  public isLoggedin = false;
  isAdmin = false;

  haveAcess() {
    return this.access;
  }
  giveAccess() {
    this.access = true;
    this.isLoggedin = true;
  }
  denyAccess() {
    this.access = false;
    this.isLoggedin = true;
  }
  login(email: string, password: string) {
    if (email === 'admin@example.com' && password === '12345') {
      //this.isLoggedin = true;
      this.isAdmin = true;
    } else {
      //this.isLoggedin = true;
      this.isAdmin = false;
    }
    localStorage.setItem(
      'userData',
      JSON.stringify({ isLoggedIn: this.isLoggedin, isAdmin: this.isAdmin })
    );
  }
  isadmin(): boolean {
    return this.isAdmin;
  }
}
