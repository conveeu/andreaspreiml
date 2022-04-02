import React from "react";

const educationContent = [
  {
    year: "2017",
    degree: "Certified Digital Consultant",
    institute: "Incite, Akademie des WKO Fachverbands UBIT",
    details: `Personenzertifizierung nach ISO 17024`,
  },
  {
    year: "2017",
    degree: "Certified eCommerce & Social-Media Consultant",
    institute: "Incite, Akademie des WKO Fachverbands UBIT",
    details: `Personenzertifizierung nach ISO 17024`,
  },
  {
    year: "2017",
    degree: "Universitätszertifikat Datenschutzbeauftragter",
    institute: "Uni4Life Karl-Franzens-Universität Graz",
    details: `Personenzertifizierung`,
  },
  {
    year: "2018",
    degree: "Certified Process Manager",
    institute: "WIFI Klagenfurt",
    details: `Prozessmanagement-Zertifizierung`,
  },
  {
    year: "2018",
    degree: "Geprüfter Datenschutzexperte",
    institute: "Incite, Akademie des WKO Fachverbands UBIT",
    details: ``,
  },
  {
    year: "2018",
    degree: "Certified Data & IT-Security Expert",
    institute: "Incite, Akademie des WKO Fachverbands UBIT",
    details: `Personenzertifizierung nach ISO 17024`,
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
