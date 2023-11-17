import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req) => {
    const { email, name, message } = await req.json();
    
    const content = {
        to: 'joshua.andersland@gmail.com',
        from: 'josh.andersland@gmail.com',
        subject: `New Message From - ${name} via joshuaandersland.com`,
        text: `The following message was sent from ${name} via joshuaandersland.com:\n 
        ${message}\n
        Provided email: ${email}\n`,
        html: `<p>The following message was sent from ${name} via joshuaandersland.com:</p>
        <p>${message}</p>
        <p>Provided email: ${email}</p>`,
    };

    try {
        await sgMail.send(content);
        return NextResponse.json({message: 'Message sent successfully!'}, {status: 200});
    } catch (error) {
        console.log('ERROR', error);
        return NextResponse.json({message: 'Message failed to send.'}, {status: 500});
    }
}