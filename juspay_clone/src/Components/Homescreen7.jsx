import React from "react";
import style from "../Style/homescreen7.module.css";

export default function Homescreen7() {
  return (
    <div className={style.home7}>
      <img src="https://s3-alpha-sig.figma.com/img/bf36/32ec/027419394646b0c6ddf6d883276cb6f8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ot6k9yb89s1v0y2M2piCJ3AxPhNu8BSywndKAbouZ2St1i68xwGGKt5z509E~jPQ6JOzdKAuYFhyHTKgs3NMCzL8XOupi1EC72R7lTWJm7kOiWGljjSHewAOBz6UJ-kkMHyN~lXmUpYbiH4q-TwQ294vzKligmmLDHnfRipLv0r4OnNpMeV4mUfqfGe0Mdj6QL3FfcS2Ue0r3rlElQyC1IcBT2EzLb-vmvK-dslBy4JXohgEtE4oaASeWGoFvAKE4GF9e3QLnyBEOcHpbYNxlGhnMO6kyNzbHjMge8B-rC38PN0WtE86n99fdOWnSsz7kndlDL0R76LtgIlWPgZJvw__"></img>
      <div className={style.home7box}>
        <div className={style.innerhome7box}>
          <div className={style.leftbox}></div>
          <div className={style.righttbox}></div>
        </div>
      </div>
    </div>
  );
}
