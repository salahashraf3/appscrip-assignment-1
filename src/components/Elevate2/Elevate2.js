import Image from "next/image";
import React from "react";
import style from "@/components/Elevate2/Elevate2.module.css";
import image12 from "@/assets/images/image12.svg";
import image13 from "@/assets/images/image13.svg";
import image14 from "@/assets/images/image14.svg";

const Elevate2 = () => {
  const data = [
    {
      image: image12,
      title: "Save Time with Automation and Efficiency",
      desc: "Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.",
    },
    {
      image: image13,
      title: "Join a Supportive Community",
      desc: "Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.",
    },
    {
      image: image14,
      title: "Unlock Exclusive Opportunities and Prizes",
      desc: "Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.",
    },
  ];
  return (
    <div className={style.elevate2_container}>
      <div className={style.card_container}>
        {data.map((value, id) => {
          return (
            <div className={style.card} key={id}>
              <Image src={value.image} alt="phone" />
              <h2>{value.title}</h2>
              <p>{value.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Elevate2;
