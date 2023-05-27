import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEST CHAT BOT';
  isChatOpened: boolean = false;

  showChatFrame():void {
    this.isChatOpened = !this.isChatOpened;
  }
}
