import { Injectable } from '@angular/core';
import { IMessage } from '../../interfaces/IMessage';
import { MessageType } from '../../enums/Message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messageList: IMessage[] = [];
  private nextId: number = 1;

  private addMessage(type: MessageType, text: string): void {
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

  showWarn(text: string): void {
    this.addMessage(MessageType.WARN, text);
  }

  showError(text: string): void {
    this.addMessage(MessageType.ERROR, text);
  }

  showSuccess(text: string): void {
    this.addMessage(MessageType.SUCCESS, text);
  }

  showInfo(text: string): void {
    this.addMessage(MessageType.INFO, text);
  }


  closeMessage(currentMessage: IMessage): void {
    this.messageList = this.messageList.filter((message: IMessage): boolean => message !== currentMessage) 
  }

}