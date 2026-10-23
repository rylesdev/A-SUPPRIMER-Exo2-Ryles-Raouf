import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact-service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  public contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl(''),
    hideEmail: new FormControl(false),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', Validators.required),
  });

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) {}

  public changeHideEmail() {
    const emailControl = this.contactForm.controls.email;

    if (this.contactForm.controls.hideEmail.value) {
      emailControl.clearValidators();
      emailControl.setValue('');
    } else {
      emailControl.setValidators([Validators.required, Validators.email]);
    }

    emailControl.updateValueAndValidity();
  }

  public onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.enregistrerContact(this.contactForm.value);
      alert('Le formulaire est valide');
      this.router.navigate(['/accueil']);
    }
  }
}
