import { ThreadChannel } from 'discord.js';

export default class ValidationError extends Error {
  thread?: ThreadChannel;
  
  constructor(message: string, thread?: ThreadChannel) {
    super(message);
    this.thread = thread;
    
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
