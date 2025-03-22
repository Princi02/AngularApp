import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';
  imgUrl ="../assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com"; // BridgeLabz Website URL

  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";      // it is called after component is initialized, use when dynamic value    
  }

  onClick(event: Event){
    console.log("Save button is clicked!", event);
    window.open(this.url, "_blank");
  }
  // message: string = "Hello from BridgeLabz! 🚀"; // Template Expression Variable,  message is initialized when the component is created,    use when static values




  onInput($event: Event) {
    console.log("Change Event Occurred!", ($event.target as HTMLInputElement).value);
  
    this.userName = ($event.target as HTMLInputElement).value;  // Update userName
    
    const nameRegex = /^[A-Z]{1}[a-zA-Z\s]{2,}$/;  // Fixed regex
  
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is Incorrect!";
  }
}
