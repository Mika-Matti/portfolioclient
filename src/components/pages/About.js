import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-5 my-3">Palaute-osio</h1>
      <p>
        Olen oppinut kurssin aikana paljon uusia asioita web-ohjelmoinnista.
        Monet asiat olivat entuudestaan jollain tavalla tuttuja, toiset enemmän
        ja toiset vähemmän. Eniten odotin reactin opiskelua ja osaan tehdä sillä
        nyt paljon paremmin kuin mitä olen ennen tehnyt. Jotkut asiat reactissa
        ovat silti edelleen hieman hämmentäviä, mutta nykyisillä taidoilla
        pystyy saamaan aikaan tuloksia jo.
      </p>
      <p>
        Node.js:n kanssa työskentely on myös parantunut kurssin alkuun
        verrattuna. Olen käyttänyt node.js lähinnä socket.io-kirjaston kanssa ja
        oli hyvä tehdä nyt paljon perinteisemmällä tavalla serveri ja siihen
        rajapinta.
      </p>
      <p>
        Kaiken kaikkiaan monet osa-alueet web-ohjelmoinnista on minun osallani
        näiden kuuden viikon aikana kohentunut. Kurssin lähtötilanteessa en
        olisi osannut tehdä tämän tapaista portfoliota, jossa haetaan kaikki
        työt tietokannasta ja näytetään ne react-pohjaisessa käyttöliittymässä,
        joka olikin ehkä kurssilta tähän mennessä lempityöni.
      </p>
      <p className="text-secondary">-Mika-Matti Auerkallio</p>
    </div>
  );
}
