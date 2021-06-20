import SparkPost from 'sparkpost';
import { externalServices } from '../../config/enviroment';

export default class SparkPostService {
  // eslint-disable-next-line max-len
  public static sendMailToSparkApi(subject: string, emailBody: string, recipent: string, name: string): Promise<boolean> {
    const { defaultEmail } = externalServices.sparkPost;
    const sparky = new SparkPost(externalServices.sparkPost.apiKey);
    const recipientsParsed = [{
      address: {
        email: recipent,
        name,
      },
    }];
    const contentParsed = {
      from: defaultEmail,
      subject,
      text: emailBody,
    };
    return sparky.transmissions.send({
      options: { sandbox: true },
      content: (contentParsed),
      recipients: recipientsParsed,
    })
      .then(() => true)
      .catch(() => false);
  }
}
