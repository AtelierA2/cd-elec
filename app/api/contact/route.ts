import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validation basique
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // TODO: Intégrer un service d'envoi d'email (Resend, SendGrid, etc.)
    //
    // Exemple avec Resend :
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'CD-ELEC <noreply@cd-elec.fr>',
    //   to: 'contact@cd-elec.fr',
    //   subject: `Nouvelle demande de devis - ${projectType}`,
    //   html: `
    //     <h2>Nouvelle demande de contact</h2>
    //     <p><strong>Nom :</strong> ${name}</p>
    //     <p><strong>Email :</strong> ${email}</p>
    //     <p><strong>Téléphone :</strong> ${phone}</p>
    //     <p><strong>Type de projet :</strong> ${projectType}</p>
    //     <p><strong>Message :</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
