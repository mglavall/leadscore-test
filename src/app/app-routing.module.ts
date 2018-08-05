import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "contacts",
    canActivate: [AuthGuard],
    loadChildren: "./contacts/contacts.module#ContactsModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
