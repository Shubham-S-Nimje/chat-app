import { Component } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-chutki',
  standalone: false,
  templateUrl: './chutki.component.html',
  styleUrl: './chutki.component.css',
})
export class ChutkiComponent {
  chutkiMessage: string = '';
  chutkiMessages: string[] = [];
  bheemMessages: string[] = [];

  constructor(public ms: ChatServiceService) {}
  ngOnInit() {
    this.updateMessages();

    setInterval(() => {
      this.updateMessages();
    }, 1000);
  }

  updateMessages() {
    this.chutkiMessages = [...this.ms.receiveMsgtoChutki()];
    this.bheemMessages = [...this.ms.receiveMsgtoBheem()];
  }

  send() {
    if (this.chutkiMessage.trim()) {
      this.ms.sendMsgfromChutki(this.chutkiMessage);
      this.chutkiMessages = [...this.ms.receiveMsgtoChutki()];
      this.chutkiMessage = '';
    }
  }

  receive() {
    this.chutkiMessages = [...this.ms.receiveMsgtoChutki()];
  }
}
