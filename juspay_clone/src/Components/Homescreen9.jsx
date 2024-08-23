import React from "react";
import style from "../Style/homescreen9.module.css";

export default function Homescreen9() {
  return (
    <div className={style.home9}>
      <div className={style.home9box}>
        <div className={style.alltext}>
          <p>TRUSTED BY</p>
          <h2>500+ Global Enterprises</h2>
        </div>
        <div className={style.minimenu}>
          <div className={style.box}>Travel</div>
          <div className={style.box}>Ecom</div>
          <div className={style.box}>Fintech</div>
          <div className={style.box}>Retail</div>
        </div>
        <div className={style.gallary}>
          <div className={style.row1}>
            <div className={style.galrybox1}>
              <img src="https://juspay.io/global/testimonials/travel-1.svg"></img>
            </div>
            <div id={style.indigobox} className={style.galrybox1}>
              <img src="https://juspay.io/global/testimonials/indigo.svg"></img>
              <p>
                Juspay's expertise in the payments ecosystem<br></br> and
                cutting-edge technology will help us to<br></br> provide a
                seamless and hassle-free payment<br></br> experience for our
                customers.
              </p>
              <h4>Mr. Neetan Chopra</h4>
              <h5>CIO, IndiGo</h5>
            </div>
            <div className={style.galrybox1}>
              <img src="https://juspay.io/global/testimonials/travel-3.svg"></img>
            </div>
          </div>
          <div className={style.row2}>
            <div className={style.galrybox2}>
              <img src="https://juspay.io/global/testimonials/travel-4.svg"></img>
            </div>
            <div className={style.galrybox2}>
              <img src="https://juspay.io/global/testimonials/travel-5.svg"></img>
            </div>
            <div className={style.galrybox2}>
              <img src="https://juspay.io/global/testimonials/travel-6.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
