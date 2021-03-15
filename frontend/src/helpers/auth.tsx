class Auth {
  public hasToken() {
    return this.getToken() != null;
  }

  public getToken() {
    const infos  = JSON.parse(localStorage.getItem("auth") as string);
    
    return infos ? infos.token : null;
  }

  public setToken(token: string): void {
    localStorage.setItem("auth", token);
  }

  public destroyToken(): void {
    localStorage.removeItem("auth");
  }
}

export default new Auth();
