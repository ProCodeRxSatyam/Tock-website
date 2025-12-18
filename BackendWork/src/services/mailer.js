import {Resend} from 'resend';

const resendClient = new Resend(process.env.RESEND_API_KEY);

const from = process.env.EMAIL_FROM;

export  const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await resendClient.emails.send({
      from,
      to,
      subject,  
        html,   
    });
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  } 
};