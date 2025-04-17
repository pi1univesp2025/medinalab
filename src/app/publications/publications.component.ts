import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-publications',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

}
