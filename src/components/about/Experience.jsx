import React from "react";

const experienceContent = [
  {
    year: "2011 - 2013",
    position: "Erste Digitalisierungsprojekte",
    compnayName: "Diverse",
    details: `Programmierung einer webbasierten Verkaufs- und Verwaltungsplattform für den Strukturvertrieb des Getränks NOVA. Mitbegründung und Entwicklung der Marke FENRO und Entwicklung eines Kalkulationsprogramms zur Berechnung von Angeboten für Fenster, Sonnenschutz, etc.`,
  },
  {
    year: "2013 - 2016",
    position: "Grafiker & Webentwickler",
    compnayName: "Selbstständig",
    details: `Entwicklung von Webseiten und kleinen Internetanwendungen für vorwiegend kleine und mittelständische Unternehmen.`,
  },
  {
    year: "2016 - laufend",
    position: "Geschäftsführer & Consultant",
    compnayName: "Conve GmbH",
    details: `Beratung von KMU zu Datenschutz- und Digitalisierungsfragen, Erarbeitung von optimierten Abläufen und Programmierung umfangreicher Websoftware zur (teilweisen) Automatisierung.`,
  },
  {
    year: "2019 - laufend",
    position: "Obmann",
    compnayName: "Austro Digital",
    details: `Mitbegründer und Vorsitzender des Kompetenznetzwerks Austro Digital - Initiative zur Digitalisierung Österreichs e. V.`,
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
