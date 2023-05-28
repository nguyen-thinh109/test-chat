import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEST CHAT BOT';
  isChatOpened: boolean = false;
  screenWidth!: number;
  screenHeight!: number;
  iframeWidth: number = 360;
  iframeHeight: number = 640;
  isMobileMode: boolean = false;

  showChatFrame(): void {
    this.isChatOpened = !this.isChatOpened;
  }

  @HostListener('window:resize', ['$event']) onWindowResize(): void {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    //ratio 16:9
    if (this.screenWidth <= 575) {
      this.iframeWidth = this.screenWidth;
      this.iframeHeight = this.screenHeight;
      this.isMobileMode = true;
    } else if (this.screenWidth > 575 && this.screenWidth <= 767) {
      this.iframeHeight = this.screenHeight * 9 / 10;
      this.iframeWidth = this.screenHeight * 81 / 160;
      this.isMobileMode = false;
    } else {
      this.isMobileMode = false;
      this.iframeHeight = this.screenHeight * 4 / 5;
      this.iframeWidth = this.screenHeight * 9 / 20;
    }

  }

  @HostListener('window:message', ['$event']) onGettingMessageFromIframe(e: any): void {
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
  }
}
