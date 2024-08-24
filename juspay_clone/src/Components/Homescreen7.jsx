import React from "react";
import { useState } from "react";
import style from "../Style/homescreen7.module.css";

export default function Homescreen7() {
  var op1 = "https://juspay.io/global/sea/video/analytics-1.webm";
  var op2 = "https://juspay.io/global/sea/video/analytics-2.webm";
  var op3 = "https://juspay.io/global/sea/video/analytics-3.webm";
  var op4 = "https://juspay.io/global/sea/video/analytics-4.webm";

  const [vidsrc, setVidsrc] = useState(op1);

  const changeVideoSrc = (src) => {
    setVidsrc(src);
  };
  return (
    <div className={style.home7}>
      <img src="https://s3-alpha-sig.figma.com/img/bf36/32ec/027419394646b0c6ddf6d883276cb6f8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ot6k9yb89s1v0y2M2piCJ3AxPhNu8BSywndKAbouZ2St1i68xwGGKt5z509E~jPQ6JOzdKAuYFhyHTKgs3NMCzL8XOupi1EC72R7lTWJm7kOiWGljjSHewAOBz6UJ-kkMHyN~lXmUpYbiH4q-TwQ294vzKligmmLDHnfRipLv0r4OnNpMeV4mUfqfGe0Mdj6QL3FfcS2Ue0r3rlElQyC1IcBT2EzLb-vmvK-dslBy4JXohgEtE4oaASeWGoFvAKE4GF9e3QLnyBEOcHpbYNxlGhnMO6kyNzbHjMge8B-rC38PN0WtE86n99fdOWnSsz7kndlDL0R76LtgIlWPgZJvw__"></img>
      <div className={style.home7box}>
        <div className={style.innerhome7box}>
          <div className={style.leftbox}>
            <div
              id="option1"
              className={style.menu}
              onClick={() => changeVideoSrc(op1)}
            >
              Unified Settlements
            </div>
            <div
              id="option2"
              className={style.menu}
              onClick={() => changeVideoSrc(op2)}
            >
              Refunds & Chargebacks
            </div>
            <div
              id="option3"
              className={style.menu}
              onClick={() => changeVideoSrc(op3)}
            >
              Real time actionable insights
            </div>
            <div
              id="option4"
              className={style.menu}
              onClick={() => changeVideoSrc(op4)}
            >
              Understand Failures &<br></br> Configure alerts
            </div>
          </div>
          <div className={style.righttbox}>
            <video
              key={vidsrc}
              style={{ objectFit: "contain" }}
              width={"100%"}
              height={"auto"}
              autoPlay={true}
              loop={true}
              muted
            >
              <source src={vidsrc}></source>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
