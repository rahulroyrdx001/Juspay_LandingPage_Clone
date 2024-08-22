import React from "react";
import style from "../Style/footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <img
        src="https://juspay.io/global/global-footer-bg.png"
        alt="background"
      ></img>
      <div className={style.footerbg}></div>
    </div>
  );
}
