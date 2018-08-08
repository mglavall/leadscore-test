import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../../services/contacts.service";
import { Contact } from "../../model/contact.model";
import { IdentityService } from "../../../core/services/identity.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  contactList: Contact[] = [];
  constructor(private contactsService: ContactsService, private identityService: IdentityService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts().subscribe(response => {
      this.contactList = response.data;
    });
  }

  logout() {
    this.identityService.logout().subscribe();
  }
}
