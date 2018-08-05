import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { IdentityService } from "./identity.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private identityService: IdentityService, private router: Router) {}
  canActivate() {
    console.log("AuthGuard#canActivate called");
    if (this.identityService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(["/login"]);
    return false;
  }
}
