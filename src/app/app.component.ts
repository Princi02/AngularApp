import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';
  message: string = "Hello from BridgeLabz! 🚀"; // Template Expression Variable
}
