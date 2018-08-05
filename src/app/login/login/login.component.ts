import { Component, OnInit } from "@angular/core";
import { IdentityService } from "../../core/services/identity.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  account: string;
  password: string;
  authError = false;
  constructor(private identityService: IdentityService) {}

  ngOnInit() {}

  login(username: string, password: string, isValid: boolean) {
    if (isValid) {
      this.identityService.login(username, password).subscribe(
        a => {
          debugger;
        },
        error => {
          if (error.status === 401) {
            //Authentication failed
            this.authError = true;
          }
        }
      );
    }
  }
}

//"Thegrandtour8!"
