const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

/*
const data = {
    to: "milibov159@momoshe.com",
    subject: "Verify email",
    html: "<p>Verify email.</p>"
};
*/

const sendEmail = async(data) => {
    const email = {...data, from: "bohdan.workit@gmail.com"};
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;