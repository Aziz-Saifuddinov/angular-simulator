import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messageList: IMessage[] = [];
  private nextId = 1;

  addMessage(type: MessageType, text: string): void {
    const newMessage: IMessage = {
      id: this.nextId++,
      type,
      text,
    };

    this.messageList = [newMessage, ...this.messageList];

    setTimeout(() => {
      this.closeMessage(newMessage);
    }, 5000);
  }

  closeMessage(currentMessage: IMessage): void {
    this.messageList = this.messageList.filter((message: IMessage): boolean => message !== currentMessage) 
  }

}