import React from "react";
import style from "../Style/footer.module.css";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className={style.footer}>
      <img
        src="https://juspay.io/global/global-footer-bg.png"
        alt="background"
      ></img>
      <div className={style.footerbg}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "relative",
            top: "20%",
          }}
        >
          <div>
            <img
              src="https://juspay.io/juspay-logo-with-name-white.svg"
              alt="Juspay logo"
            ></img>
          </div>
          <div style={{ display: "flex", gap: "30%", color: "#FFFF" }}>
            <div>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Contact</p>
            </div>
            <div>
              <h4>Resources</h4>
              <p>Dashboard</p>
              <p>Documents</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            zIndex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%", color: "#FFFF" }}>
            <p>2024 Juspay Technologies. All rights reserved.</p>
          </div>
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              color: "#FFFF",
            }}
          >
            <p>Privacy Policy</p>
            <p>FAQ</p>
            <p>Terms of Service</p>
          </div>
          <div style={{ width: "20%", gap: "5%", color: "#FFFF" }}>
            <BsInstagram />
            <FaLinkedinIn />
            <RiTwitterXLine />
          </div>
        </div>
      </div>
    </div>
  );
}
