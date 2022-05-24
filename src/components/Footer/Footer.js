import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="col p-3 bg-dark mt-5 mx-0">
      <div
        style={{
          textDecoration: "none",
          color: "white",
          margin: "5px 20px",
          boxSizing: "border-box",
        }}
      >
        <h2 className="text-white font-weight-light"></h2>
        <p
          style={{ fontSize: "12px", textDecoration: "none", color: "#ed5168" }}
        >
          ME ENCANTA ❤
        </p>
      </div>
      <p className="text-white" style={{ fontSize: "15px" }}>
        NUESTRAS REDES
      </p>

      <div className="row-md-3 d-flex align-items-center justify-content-center">
        <div className="row-md-3 text-center m-1">
          <a
            style={{ color: "#ed5168" }}
            target="blank"
            href="https://api.whatsapp.com/send?phone=543512693811"
          >
            <WhatsAppIcon />
          </a>
        </div>

        <div className="row-md-3 text-center m-1">
          <a
            style={{ color: "#ed5168" }}
            target="blank"
            href="https://www.facebook.com/Me-Encanta-361140664497128/"
          >
            <FacebookIcon />
          </a>
        </div>

        <div className="row-md-3 text-center m-1">
          <a
            style={{ color: "#ed5168" }}
            target="blank"
            href="https://www.instagram.com/me_encanta_cba/"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;