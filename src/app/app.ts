import { Component, signal } from '@angular/core';
import { Header } from './profile/header/header';
import { Profile } from './profile/profile/profile';
import { Summary } from './profile/summary/summary';
import { Experience } from './profile/experience/experience';
import { Skills } from './profile/skills/skills';
import { Contact } from './profile/contact/contact';
import { Footer } from './profile/footer/footer';
import { About } from './profile/about/about';

@Component({
  selector: 'app-root',
  imports: [Header, Profile, About, Summary, Experience, Skills, Contact, Footer],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
