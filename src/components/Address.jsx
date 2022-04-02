import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Ort</span>9400 Wolfsberg
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Schreib mir</span>{" "}
        <a href="mailto:andreas@der-digicoach.at">andreas@der-digicoach.at</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Ruf mich an</span>{" "}
        <a href="Tel: +216 21 184 010">+43 664 5107502</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
