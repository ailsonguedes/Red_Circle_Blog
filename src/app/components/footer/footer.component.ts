import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear:string = this.getCurrentYear();

  getCurrentYear(){
    const date = new Date();
    const currentYear:string = String(date.getFullYear());

    return currentYear;
  }
}
