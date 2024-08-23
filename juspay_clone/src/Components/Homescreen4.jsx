import React from "react";
import style from "../Style/homescreen4.module.css";
import CountUp from 'react-countup';

export default function Homescreen4() {
  return (
    <div className={style.home4}>
      <div className={style.innerbox}>
        <div className={style.exploreintegration}>
          <h2>
            Take your <span>business</span>
            <br></br>to the world
          </h2>
          <p>
            Simplify global Go-to-market with 100+ local payment<br></br>{" "}
            integrations in 50+ countries. Integrate local payment<br></br>{" "}
            methods in minutes, improve conversion rates and build<br></br>{" "}
            frictionless checkout experiences
          </p>
          <div className={style.numbers}>
            <div className={style.box300}>
            <CountUp start={0} end={300} duration={6} delay={0}/>+ <br />
              <p>PSP integrations</p>
            </div>
            <div className={style.box50}>
            <CountUp start={0} end={50} duration={6} delay={0}/>+ <br />
              <p>Countries supported</p>
            </div>
          </div>
          <div className={style.explorebtn}>
            <button>Explore Integration</button>
          </div>
        </div>
        <div className={style.videoelemet}>
          <video width={"560px"} loop={true} autoPlay={true} muted>
            <source src="https://juspay.io/global/sea/video/globe.webm"></source>
          </video>
        </div>
      </div>
    </div>
  );
}
