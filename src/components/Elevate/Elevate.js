import React from "react";
import style from "@/components/Elevate/Elevate.module.css";
import Image from "next/image";
import phone from "@/assets/images/phoneMoney.svg";
import ecom from "@/assets/images/ecom.svg";
import girl1 from "@/assets/images/girl1.svg";
import girl2 from "@/assets/images/girl2.svg";
import girl3 from "@/assets/images/girl3.svg";
import star from "@/assets/images/material-symbols_star.svg";

const Elevate = () => {
  const models = [
    {
      image: girl1,
      name: "Green  bikini",
      price: "100",
      rating: "2",
    },
    {
      image: girl2,
      name: "Bikini pairs",
      price: "900",
      rating: "5",
    },
    {
      name: "Blue bikni",
      image: girl3,
      price: "300",
      rating: "4",
    },
  ];
  return (
    <div className={style.elevate_container}>
      <h1>Elevate Your Craft</h1>

      <div className={style.card_container}>
        <div className={`${style.card} ${style.card_left}`}>
          <h2>Unlock Your ABC Earning Potential</h2>
          <p>
            Are you ready to take your earning potential to the next level? With
            ABC, you have multiple avenues to monetize your content seamlessly.
            From subscriptions and tips to merchandise sales and NFTS, ABC helps
            you diversify your revenue streams and maximize your income.
          </p>
          <Image src={phone} alt="phone" className={style.phone} />
        </div>

        <div className={`${style.card} ${style.card_right}`}>
          <h2>Boost Your Sales with Built-in E-commerce</h2>
          <p>
            Take control of your brand and boost your sales with ABC&apos;s
            built-in e-commerce functionality. Showcase and sell your exclusive
            products, whether it&apos;s merchandise, digital downloads, or
            personalized experiences. Integrate your store effortlessly and turn
            your creative ideas into profitable ventures.
          </p>
          <div className={style.mini_card_list}>
            <div className={style.ecom}>
              <Image src={ecom} alt="ecom" />
            </div>
            {models.map((value, id) => {
              return (
                <>
                  <div className={value.rating ==="4" ?`${style.mini_card} ${style.hide_card}`: `${style.mini_card}`} key={id}>
                    <Image src={value.image} alt={value.price} />
                    <div className={style.price_rate}>
                      <div className={style.left}>
                        <h5>{value.name}</h5>
                        <p>${value.price}</p>
                      </div>
                      <div className={style.right}>
                        <Image src={star} alt="star" />
                        <p>{value.rating}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
