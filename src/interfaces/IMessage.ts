import { MessageType } from "../enums/Message";

export interface IMessage {
  type: MessageType;
  text: string;
}