import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../../services/contacts.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts().subscribe(
      a => {
        debugger;
      },
      e => {
        debugger;
      }
    );
  }
}
