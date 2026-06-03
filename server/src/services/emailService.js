import nodemailer from 'nodemailer';

function createTransport() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
}

export async function sendSubmissionNotification(submitterEmail, resourceTitle) {
  const notificationEmail = process.env.NOTIFICATION_EMAIL;
  if (!notificationEmail || !submitterEmail) return;

  const transport = createTransport();
  if (!transport) return;

  try {
    await transport.sendMail({
      from: notificationEmail,
      to: notificationEmail,
      replyTo: submitterEmail,
      subject: `New resource submitted: ${resourceTitle}`,
      text: `A new resource has been submitted by ${submitterEmail}:\n\nTitle: ${resourceTitle}`,
    });
  } catch {
    console.error('Failed to send notification email');
  }
}
