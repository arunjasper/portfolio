import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/arunjasper/', '_blank');
  }

  get email(): string {
    return 'arunjasper@yahoo.com';
  }
}
