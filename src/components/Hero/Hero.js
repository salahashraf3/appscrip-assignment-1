import React from "react";
import style from "@/components/Hero/Hero.module.css";
import Image from "next/image";
import gLogo from "@/assets/icons/lgog.png";

const Hero = () => {
  return (
    <div className={style.hero_container}>
      <div className={style.main_container}>
        <div className={style.left}>
          <h1>A Creator’s Paradise</h1>
          <p>Were Creativity Meets Success</p>
        </div>
        <div className={style.right}>
          <div className={style.signUpBox}>
            <button className={style.signInWithGoogle}>
              <div className={style.googleIcon}>
                <Image src={gLogo} alt="logo" />
              </div>
              <p>Continue With Google</p>
            </button>
            <hr className={style.hr} />
            <form id={style.registerForm} action="#">
              <div className="flex">
                <input
                  type="text"
                  placeholder="First Name*"
                  style={{ width: "48.9%" }}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  style={{ width: "48.9%" }}
                />
              </div>
              <input
                style={{ width: "100%" }}
                type={"email"}
                placeholder={"Email*"}
              />
              <input type={"password"} placeholder={"Password*"} />
            </form>
            <select className={style.dropdown}>
              <option value="#">
                (GMT+05:30) india standard Time - Calcutta{" "}
              </option>
            </select>
            <button className={style.signUpAsUser}>Signup as a user</button>
            <p className={style.pera}>
              By signing up you agree to our Terms & Conditions and Privacy
              Policy. and confirm that you are at least 18 years old.
            </p>
            <hr className={style.ORhr} />
            <button className={style.signUpAsCreator}>
              Signup as a creator
            </button>
            <p className={style.pera}>
              Already have an account?
              <span
                style={{
                  color: "#7421F4",
                  marginLeft: "2px",
                  cursor: "pointer",
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
