import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { members } from './members';

@Component({
  selector: 'app-team',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
    team: any;

    constructor() {
      this.team = members;
    }
}