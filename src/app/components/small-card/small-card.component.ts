import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() photoCover: string = "";

  @Input() cardDate: string = "";

  @Input() cardTitle: string = "";

  @Input() cardUrl: string = "";

  @Input() cardDescription: string = "";
}
