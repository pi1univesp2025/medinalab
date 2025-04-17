import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-join',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {

}
