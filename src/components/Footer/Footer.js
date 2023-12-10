import React from "react";
import style from "@/components/Footer/Footer.module.css";
import logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import facebook from "@/assets/icons/facebook.png";
import twitter from "@/assets/icons/twitter.png";
import insta from "@/assets/icons/instagram.png";
import youtube from "@/assets/icons/youtube.png";

const Footer = () => {
  const company = [
    "About Us",
    "Support",
    "Blog",
    "Login",
    "Signup",
    "Contact Us",
  ];
  const programs = [
    "Affiliate Program",
    "Ambassador Program",
    "Partnership Program",
  ];
  const policy = [
    "Legal",
    "DMCA",
    "USC 2257",
    "Privacy Policy",
    "Terms and Conditions",
  ];

  return (
    <footer className={style.footer_container}>
      <Image src={logo} alt="logo" />
      <div className={style.items_container}>
        <div className={style.item_container}>
          <h3>Company</h3>
          {company.map((value, id) => {
            return <p key={id}>{value}</p>;
          })}
        </div>
        <div className={style.item_container}>
          <h3>Programs</h3>
          {programs.map((value, id) => {
            return <p key={id}>{value}</p>;
          })}
        </div>
        <div className={style.item_container}>
          <h3>Policy</h3>
          {policy.map((value, id) => {
            return <p key={id}>{value}</p>;
          })}
        </div>
      </div>
      <div className={style.follow_container}>
        <h3>Follow Us</h3>
        <div className={style.icon_container}>
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={insta} alt="instagram" />
          <Image src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
