import React from "react";
import style from "@/components/EarnNow/EarnNow.module.css";
import Image from "next/image";
import emojiSolar from "@/assets/images/solarEmoji.png";

const EarnNow = () => {
  return (
    <div className={style.earn_container}>
      {/* <Image src={emojiSolar} alt="solar" className={style.solar} /> */}
      <div className={style.container}>
        <h1>
          Ready to Cash in Your Connections? <br /> Join Our Affiliate Program
        </h1>
        <p>
          Join now and get <span className={style.focusText}> 7.5%</span>{" "}
          commission on all creator referrals for the entire year.
        </p>
        <button className={style.btn}>Earn Now</button>
      </div>
    </div>
  );
};

export default EarnNow;
