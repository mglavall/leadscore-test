import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../model/user.model";
import { tap } from "rxjs/operators";
import { Session } from "../model/session.model";

@Injectable({
  providedIn: "root"
})
export class IdentityService {
  session: Session;
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .post<Session>("https://internal-api-staging-lb.interact.io/v2/login", {
        username: username,
        password: password,
        client: "webapp"
      })
      .pipe(tap((val: Session) => (this.session = val)));
  }
}
