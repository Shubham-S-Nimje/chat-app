import { Component } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-bheem',
  standalone: false,
  templateUrl: './bheem.component.html',
  styleUrl: './bheem.component.css',
})
export class BheemComponent {
  bheemMessage: string = '';
  bheemMessages: string[] = [];
  chutkiMessages: string[] = [];

  constructor(public ms: ChatServiceService) {}

  ngOnInit() {
    this.updateMessages();

    setInterval(() => {
      this.updateMessages();
    }, 1000);
  }

  updateMessages() {
    this.bheemMessages = [...this.ms.receiveMsgtoBheem()];
    this.chutkiMessages = [...this.ms.receiveMsgtoChutki()];
  }

  send() {
    // console.log(this.bheemMessage, this.bheemMessages, this.chutkiMessages);
    if (this.bheemMessage.trim()) {
      this.ms.sendMsgfromBheem(this.bheemMessage);
      this.bheemMessage = '';
      this.updateMessages();
    }
  }
  receive() {
    this.bheemMessages = [...this.ms.receiveMsgtoBheem()];
  }
}
