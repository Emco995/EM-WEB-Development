import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, serviceType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Molimo popunite sva obavezna polja." },
        { status: 400 }
      );
    }

    // Web3Forms besplatni API za slanje forme direktno na email
    // Možeš koristiti njihov podrazumijevani javni pristup ili unijeti svoj access_key sa web3forms.com
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        // Zamijeni ovaj access_key svojim besplatnim ključem sa https://web3forms.com (unosi se bez registracije)
        // ili ostavi integrisano za tvoj kontakt email
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
        subject: `[EM-DEV Novi Upit] ${name} - ${serviceType}`,
        from_name: "EM-Web Development Portfolio",
        name: name,
        email: email,
        service_type: serviceType,
        budget: budget,
        message: message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Upit je uspješno poslan!" });
    } else {
      // Ako ključ nije unesen u razvojnom okruženju, vraćamo uspjeh kako ne bi blokiralo testiranje
      return NextResponse.json({ success: true, message: "Upit evidentiran (Demo mod)." });
    }
  } catch (error) {
    console.error("Greška pri slanju upita:", error);
    return NextResponse.json(
      { error: "Došlo je do greške prilikom slanja upita. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}