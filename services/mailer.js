require('dotenv').config();
const nodemailer = require('nodemailer');

// Tạo một transporter với cấu hình
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ngoccuong147512@gmail.com',
    pass: 'znmz zsgd ntuq beep',
  },
});
// Hàm để gửi email chứa mã OTP
function sendOTPEmail(
    args) {
  const mailOptions = {
    from: 'ngoccuong147512@gmail.com',
    to: args.to,
    subject: args.subject,
    html: args.html,
    // attachments,
    // text: `Your OTP is: ${otp}`,
  };
  console.log(mailOptions.to)
  // console.log(subject)
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


exports.sendEmail = async (args) => {
  if (!process.env.NODE_ENV === "development") {
    return Promise.resolve();
  } else {
    return sendOTPEmail(args);
  }
};

// module.exports = {
//   sendOTPEmail,
// }
