import { Component } from '@angular/core';
import { LucideIconsModule } from '../lucide-icons.module';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [LucideIconsModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  nameBlog:string = 'Red Circle Blog'

}
