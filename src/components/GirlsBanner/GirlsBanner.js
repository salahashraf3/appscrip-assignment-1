import React from "react";
import style from "@/components/GirlsBanner/GirlsBanner.module.css";
import image from "@/assets/images/Banner.png";
import Image from "next/image";

const GirlsBanner = () => {
  return (
    <div className={style.girls_banner_container}>
      <Image src={image} alt="posts" />
    </div>
  );
};

export default GirlsBanner;
