/* eslint-disable no-undef */
import nodemailer from "nodemailer";
import dotenv from"dotenv"

dotenv.config()

export const Usemail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.CORREO}`, // Tu correo (debes de crear un archivo .env para poner ahí tus variables de entorno en este caso el CORREO)
        
        pass: `${process.env.PASS}` // Debes de crear una contraseña de aplicaión con tu gmail (debes de crear un archivo .env para poner ahí tus variables de entorno en este caso la CONTRASEÑA)
      }
    });

    const mailOptions = {
      from: `${process.env.CORREO}`, // Dirección del remitente
      to: to, // Lista de destinatarios
      subject: subject, // Asunto del correo
      text: text, // Cuerpo del correo en texto plano
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      return { success: true, info };
    } catch (error) {
      console.log(error);
      return { success: false, error };
    }
  };