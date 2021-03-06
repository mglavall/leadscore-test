import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { tap } from "rxjs/operators";
import { Session } from "../model/session.model";
import { Router } from "../../../../node_modules/@angular/router";

@Injectable({
  providedIn: "root"
})
export class IdentityService {
  session: Session;

  constructor(private httpClient: HttpClient, private router: Router) {}
  // Makes the login and saves the session in the session param.
  login(username: string, password: string) {
    return this.httpClient
      .post<Session>("https://internal-api-staging-lb.interact.io/v2/login", {
        username: username,
        password: password,
        client: "webapp"
      })
      .pipe(tap((val: Session) => (this.session = val)));
  }

  getAuthToken() {
    return this.session.token.authToken;
  }

  isLoggedIn() {
    return !!this.session;
  }

  logout() {
    return this.httpClient
      .post<string>("https://internal-api-staging-lb.interact.io/v2/logout", {
        authToken: this.session.token.authToken
      })
      .pipe(
        tap(val => {
          this.session = null;
          this.router.navigate(["login"]);
        })
      );
  }
}
