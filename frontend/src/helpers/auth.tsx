class Auth {
  public hasToken() {
    return this.getToken() != null;
  }

  public getToken() {
    return localStorage.getItem("auth");
  }

  public setToken(token: string): void {
    localStorage.setItem("auth", token);
  }

  public destroyToken(): void {
    localStorage.removeItem("auth");
  }
}

export default new Auth();
