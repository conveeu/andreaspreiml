import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    axios
      .post("https://api.wirtschaftstisch.at/items/anfragen", data)

      .then(function(response) {

        console.log(response.data);
        console.log("Message submited: " + JSON.stringify(data));
        alert('Danke! Deine Anfrage ist bei mir angekommen!');
      })

      .catch(function(error) {

        console.log(error);

      });
    

  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Dein Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Das Feld Name ist ein Pflichtfeld</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Das Feld Name ist ein Pflichtfeld",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Die eingegebene E-Mail-Adresse ist ungültig",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="Deine E-Mail-Adresse"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="Betreff"
              />
              {errors.subject && (
                <span className="invalid-feedback">Ein Betreff ist erforderlich.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="Deine Nachricht"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Eine Nachricht muss eingegeben werden.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Kontakt aufnehmen</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
