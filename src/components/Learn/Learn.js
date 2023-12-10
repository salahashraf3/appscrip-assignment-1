import React from "react";
import style from "@/components/Learn/Learn.module.css";
import girl1 from "@/assets/images/LearnGirl1.png";
import girl2 from "@/assets/images/LearnGirl2.png";
import Image from "next/image";

const Learn = () => {
  return (
    <div className={style.learn_container}>
      <Image src={girl1} alt="girl1" className={style.girl_left} />
      <Image src={girl2} alt="girl2" className={style.girl_right}/>
      <div className={style.container}>
        <h1>Join the ABC Community</h1>
        <p>
          Become part of a vibrant and supportive community of like-minded
          creators by joining ABC&apos;s exclusive platform. Collaborate, learn,
          and connect with fellow creators who share your passion for adult
          content creation.
        </p>
        <button className={style.btn}>Learn More</button>
      </div>
    </div>
  );
};

export default Learn;
