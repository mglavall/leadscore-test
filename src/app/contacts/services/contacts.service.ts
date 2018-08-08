import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../model/contact.model";

@Injectable({
  providedIn: "root"
})
export class ContactsService {
  constructor(private httpClient: HttpClient) {}

  getContacts() {
    return this.httpClient.get<any>("https://internal-api-staging-lb.interact.io/v2/contacts");
  }
}
