import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulaire soumis:', this.contact);
    // Ajouter ici le traitement du formulaire (par exemple, envoyer les données à un serveur)
    alert('Merci pour votre message !');
    // Réinitialiser le formulaire après soumission
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }
}

