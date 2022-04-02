import React from "react";

const personalInfoContent = [
  { meta: "Vorname", metaInfo: "Andreas" },
  { meta: "Nachname", metaInfo: "Preiml" },
  { meta: "Alter", metaInfo: "29 Jahre" },
  { meta: "Nationalität", metaInfo: "Österreich" },
  { meta: "Wohnort", metaInfo: "Wolfsberg" },
  { meta: "Telefon", metaInfo: "+436645107502" },
  { meta: "Email", metaInfo: "andreas@der-digicoach.at" },
  { meta: "Sprachen", metaInfo: "Deutsch, Englisch" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
