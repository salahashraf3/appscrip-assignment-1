import React from "react";
import style from "@/components/Join/Join.module.css";
import Image from "next/image";
import bubbleLeft from "@/assets/images/BubblesLeft.svg";
import bubbleRight from "@/assets/images/BubblesRight.svg";

const Join = () => {
  return (
    <div className={style.join_container}>
      <Image src={bubbleLeft} alt="circle-left" className={style.bubble_left} />
      <Image src={bubbleRight} alt="circle-right" className={style.bubble_right} />
      <div className={style.container}>
        <p>
          Don&apos;t miss out on ABC&apos;s Incredible features and
          Opportunities.
        </p>
        <h2>Join us today and unlock your full potential as a creator</h2>
        <button className={style.btn}>Join Now</button>
      </div>
    </div>
  );
};

export default Join;
