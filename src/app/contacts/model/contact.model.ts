export interface Email {
  email: string;
  primary: boolean;
  type: string;
}

export interface Phone {
  number: number;
  primary: boolean;
  type: string;
}

export interface Contact {
  id: string;
  displayName: string;
  emails: Email[];
  phoneNumbers: Phone[];
  created: number;
  profilePicture: string;
}
