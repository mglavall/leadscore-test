import { Component, OnInit } from "@angular/core";
import { IdentityService } from "../../core/services/identity.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private identityService: IdentityService) {}

  ngOnInit() {
    this.identityService.login("mgomezlavall@gmail.com", "Thegrandtour8!");
  }
}
