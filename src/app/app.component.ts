import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEST CHAT BOT';
  isChatOpened: boolean = false;

  constructor() {
    window.addEventListener('message', (e) => {
      let dataTransport = JSON.parse(e.data) || {};

      if (dataTransport?.topic == "BUTTON_CLICK") {
        switch (dataTransport?.buttonAction) {
          case "MINIMIZE":
            console.log(dataTransport);
            this.isChatOpened = !this.isChatOpened;

            break;

          case "XXX":
            //do XXX
            break;

          case "YYY":
            //do YYY
            break;

        }
      }
    });
  }

  showChatFrame(): void {
    this.isChatOpened = !this.isChatOpened;
  }
}
