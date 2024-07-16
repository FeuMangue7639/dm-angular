import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert(`Merci, ${this.contact.name}. Nous avons bien reçu votre message.`);
    // Ici, tu peux ajouter la logique pour envoyer le message à un serveur, etc.
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}

