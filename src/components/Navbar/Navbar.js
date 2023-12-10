import React from "react";
import style from "@/components/Navbar/Navbar.module.css";
import logo from "@/assets/icons/logo.svg";
import menu from "@/assets/icons/menuIcon.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const navbarItems = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Our Blog" },
    { title: "Support" },
    { title: "Affiliate" },
  ];

  return (
    <nav className={style.navbar_container}>
      <div className={style.navbar_logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={style.navbar_items_container}>
        {navbarItems.map((value, id) => {
          return (
            <Link
              key={id}
              href="#"
              className={id === 0 ? style.active_link : style.link}
            >
              {value.title}
            </Link>
          );
        })}
        <select className={style.selectDropdown} name="" id="">
          <option selected disabled value="#">
            Programs
          </option>
        </select>
      </div>

      <div className={style.navbar_button_group}>
        <button className={style.navbar_button_login}>Login</button>
        <button className={style.navbar_button_signup}>Sign Up</button>
      </div>

      <div className={style.mobile_menu}>
        <Image src={menu} alt="menuIcon" />
      </div>
    </nav>
  );
};

export default Navbar;
