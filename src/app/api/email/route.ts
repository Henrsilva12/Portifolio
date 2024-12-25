import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { nome, email, mensagem } = await request.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios!" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Configure no .env.local
        pass: process.env.EMAIL_PASS, // Configure no .env.local
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contato de ${nome}`,
      text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Erro ao enviar o e-mail. Tente novamente." },
      { status: 500 }
    );
  }
}
