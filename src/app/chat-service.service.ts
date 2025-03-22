import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  bheemMessages: string[] = [];
  chutkiMessages: string[] = [];

  sendMsgfromBheem(m: string) {
    this.bheemMessages.push(m);
  }
  sendMsgfromChutki(m: string) {
    this.chutkiMessages.push(m);
  }

  receiveMsgtoBheem() {
    return this.bheemMessages;
  }
  receiveMsgtoChutki() {
    return this.chutkiMessages;
  }
}
