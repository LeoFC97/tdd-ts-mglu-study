export default class StringValidator {
  public static validadeEmailForSpartPost(emailToBeValidated: string): boolean {
    const emailProvider = emailToBeValidated.split('@')[1];
    if (emailProvider === 'sparkpostbox.com') {
      return true;
    }
    return false;
  }
}
