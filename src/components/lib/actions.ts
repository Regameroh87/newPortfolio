"use server";
require("dotenv").config();
import { redirect } from "next/navigation";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const SendEmail = async (formData: FormData) => {
  const propsMail = Object.fromEntries(formData.entries());
  
  for (let key in propsMail) {
    const value = propsMail[key]
    // console.log(value)
    if (!value) {
      return;
    }
  }

  let mailOptions = {
    from: process.env.EMAIL,
    to: "gamero.rodrigo@gmail.com",
    subject: "Consulta del portfolio",
    text: ` El cliente ${propsMail.firstname} ${propsMail.lastname} email: ${propsMail.email} te envio la sig consulta: ${propsMail.message}`,
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("correoenviado", info.response);
    }
  });
  
  redirect("/");
};
