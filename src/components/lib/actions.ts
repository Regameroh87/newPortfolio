"use server";
require('dotenv').config();
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

  console.log(process.env.EMAIL, process.env.PASS)
  const propsMail = Object.fromEntries(formData.entries());
  console.log(propsMail);
  let mailOptions = {
    from: process.env.EMAIL,
    to: "gamero.rodrigo@gmail.com",
    subject: "Consulta del portfolio",
    text: ` El cliente ${propsMail.firstname} ${propsMail.lastname} email: ${propsMail.email} te envio la sig consulta: ${propsMail.message}`,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error)
    } else {
        console.log("correoenviado", info.response)
    }
  })

  redirect("/");
};
