import React from "react";
import style from "../Style/homescreen8.module.css";

export default function Homescreen8() {
  return (
    <div className={style.home8}>
      <div className={style.home8box}>
        <div className={style.alltext}>
          <h2>End-to-End Payments</h2>
          <h2>
            <span>Infrastructure</span>
          </h2>
          <p>Everything that you need to build a payments</p>{" "}
          <p>stack to fuel your business growth</p>
        </div>
        <div className={style.menu}>
          <div className={style.box}>Intelligent Routing</div>
          <div className={style.box}>Fraud Management</div>
          <div className={style.box}>Payment Flows</div>
          <div className={style.box}>Boost Conversions</div>
        </div>
        <div className={style.cardmenu}>
          <div className={style.card}>
            <video
              style={{ objectFit: "contain" }}
              width={"100%"}
              autoPlay={true}
              loop={true}
              muted
            >
              <source src="https://juspay.io/global/sea/e2e/intelligent-routing/1.webm" />
            </video>
            <p>100+ PSP <br></br>Integrations globally</p>
          </div>
          <div className={style.card}>
            <video
              style={{ objectFit: "contain" }}
              width={"100%"}
              autoPlay={true}
              loop={true}
              muted
            >
              <source src="https://juspay.io/global/sea/e2e/intelligent-routing/2.webm" />
            </video>
            <p>300+ Payment<br></br> Methods</p>
          </div>
          <div id={style.crd4} className={style.card}>
            <video
              style={{ objectFit: "contain" }}
              width={"100%"}
              autoPlay={true}
              loop={true}
              muted
            >
              <source src="https://juspay.io/global/sea/e2e/intelligent-routing/3.webm" />
            </video>
            <p>Intelligent Routing</p>
          </div>
          <div id={style.crd4} className={style.card}>
            <video
              style={{ objectFit: "contain" }}
              width={"100%"}
              autoPlay={true}
              loop={true}
              muted
            >
              <source src="https://juspay.io/global/sea/e2e/intelligent-routing/4.webm" />
            </video>
            <p>Load Balancing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
