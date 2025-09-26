const mailer = require("nodemailer");

const sendingMail = async (to, subject, text) => {
  try {
    const transporter = mailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", mailresponse);
    return mailresponse;
  } catch (error) {
    console.error("Error sending mail:", error);
    return { success: false, message: "Failed to send email" };
  }
};

module.exports = { sendingMail };
