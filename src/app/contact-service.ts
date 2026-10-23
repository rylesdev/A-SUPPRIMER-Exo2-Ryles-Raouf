import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public dernierContact: any = null;

  public enregistrerContact(contact: any) {
    this.dernierContact = contact;
  }
}
