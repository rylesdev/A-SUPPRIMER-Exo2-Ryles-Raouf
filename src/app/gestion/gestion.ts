import { Component } from '@angular/core';
import { ContactService } from '../contact-service';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.html',
  styleUrl: './gestion.scss',
})
export class Gestion {
  public dernierContact: any = null;

  constructor(private contactService: ContactService) {
    this.dernierContact = this.contactService.dernierContact;
  }
}
