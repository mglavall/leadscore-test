import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactsRoutingModule } from "./contacts-routing.module";

@NgModule({
  imports: [CommonModule, ContactsRoutingModule],
  declarations: [ContactsComponent]
})
export class ContactsModule {}
