import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class IdentityService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    let log = {
      username: username,
      password: password,
      client: "webapp"
    };
    debugger;
    this.httpClient
      .post("https://internal-api-staging-lb.interact.io/v2/login", log)
      .subscribe(a => {
        debugger;
      });
  }
}
