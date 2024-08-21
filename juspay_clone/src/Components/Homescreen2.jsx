import React from "react";
import style from "../Style/homescreen2.module.css";
import Companylistscroll from "../utils/Companylistscroll";

export default function Homescreen2() {
  return (
    <div className={style.home2}>
      <div className={style.companylist}>
        <Companylistscroll></Companylistscroll>
      </div>

      <video width={"100%"} loop={true} autoPlay={true} muted>
        <source src="https://s3-figma-videos-production-sig.figma.com/video/839814019627549847/TEAM/a18b/cd93/-3e94-4261-8c29-da14fcdd4118?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5HZj~4Tr1tC8OAU-8xJmh7dTthbv-zwiL69AGW7LagL50wjY1U43fEcCvlA907nxlnKAriR07nH-I2~OSL9yPQTP-E8EKk0cR1pDFMVQV2pMqdijxulw~4C~TQN18BaA70Z8J7w3dfyVkDqT9fv28Qpe3bd4fW-Vqv-4nnBRFDFuaUKrtMr47hqkDUHjOAlcgsndknLa0lsjY5cwGIk0HXUvD5vjbo6n6uVXHZuHcUVFoYk1th0mUTL4zzF2U-C73WU-qs9LIHPPJ1K-GRAkUWDgiQS9u5sqanVbAhqdQBxZzfrirOGM9QUUhDTROt13leYFLB5i6zNXfA4OHtLMw__"></source>
      </video>
    </div>
  );
}
