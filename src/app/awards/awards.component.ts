import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-awards',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {

}
