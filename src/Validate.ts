import ValidationError from './errors/ValidationError';
import { ThreadChannel } from 'discord.js';

const Validate = {
  /**
   * Validate the POAP code value
   * @param code string that represents the poap code
   * @param paopEventsModel Model<PoapEvent> type from @degen/schema
   * @param thread The thread channel for the command execution
   */
  async poapCode(
    code: string | null,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    paopEventsModel?: any,
    thread?: ThreadChannel,
  ): Promise<void> {
    if (code == null) {
      return;
    }
    const POAP_CODE_REGEX = /^[\w\s\W]{1,50}$/;
    if (!POAP_CODE_REGEX.test(code)) {
      throw new ValidationError(
        'Please enter a POAP code: \n' +
                '- 50 characters maximum\n ' +
                '- alphanumeric\n ' +
                '- special characters: .!@#$%&,?', thread);
    }
    if (paopEventsModel) {
      const result = await paopEventsModel.findOne({
        isActive: true,
        'twitterEventMetadata.poapCode': code,
      });
  
      if (result) {
        throw new ValidationError('Please try another POAP code.', thread);
      }
    }
  },

  numberToMint(numberToMint: number, thread?: ThreadChannel): void {
    if (numberToMint >= 1000 || numberToMint <= 0) {
      throw new ValidationError(
        'A maximum of 1000 POAPs can be minted for a single event. Please let us know if you\'d like to see this increased.',
        thread,
      );
    }
  },

  eventName(event?: string, thread?: ThreadChannel): void {
    if (event == null) {
      return;
    }
    const POAP_EVENT_REGEX = /^[\w\s\W]{1,250}$/;
    if (!POAP_EVENT_REGEX.test(event)) {
      throw new ValidationError(
        'Please enter a valid event: \n' +
          '- 250 characters maximum\n ' +
          '- alphanumeric\n ' +
          '- special characters: .!@#$%&,?', thread);
    }
  },
};

export default Validate;
