// const mailer = require("nodemailer");

// const sendingMail = async (to, subject, text) => {
//   try {
//     const transporter = mailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "stayspherewelcome@gmail.com",
//         pass: "xlwo fmdv bawv vaft",
//       },
//     });

//     const mailOptions = {
//       from: "stayspherewelcome@gmail.com",
//       to: to,
//       subject: subject,
//       text: text,
//     };

//     const mailresponse = await transporter.sendMail(mailOptions);
//     console.log("Mail sent successfully:", mailresponse);
//     return mailresponse;
//   } catch (error) {
//     console.error("Error sending mail:", error);
//     return { success: false, message: "Failed to send email" };
//   }
// };
// module.exports = {
//   sendingMail,
// };
const mailer = require("nodemailer");

const sendingMail = async (to, subject, htmlContent) => {
  try {
    const transporter = mailer.createTransport({
      service: "gmail",
      auth: {
        user: "stayspherewelcome@gmail.com",
        pass: "xlwo fmdv bawv vaft", // <-- app password
      },
    });

    const mailOptions = {
      from: '"Stay Sphere" <stayspherewelcome@gmail.com>', // nicer sender name
      to,
      subject,
      html: htmlContent, // ✅ use html instead of text
    };

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", mailresponse);
    return mailresponse;
  } catch (error) {
    console.error("Error sending mail:", error);
    return { success: false, message: "Failed to send email" };
  }
};

module.exports = {
  sendingMail,
};
