/* eslint-disable no-console */

export default class Logger {
  public static message(message: string, componentName: string): Promise<void> {
    return new Promise(resolve => {
      console.log('\n');
      console.log(message, componentName);
      console.log('\n');

      resolve();
    });
  }
}
