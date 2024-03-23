import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() photoCover:String = "";

  @Input() cardDate:String = "";

  @Input() cardTitle:String = "";

  @Input() cardDescription:String = "";

  @Input() cardAutor:String = "";

  @Input() cardUrl:String = "";

}
