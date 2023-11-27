import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponentComponent } from './components/user-component/user-component.component';

@Component({
  standalone : true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, UserComponentComponent]
})
export class AppComponent {
  title = 'quete14';
}
