import React from 'react'
import s from "./Footer.module.css"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import pinterest from "../../assets/images/pinterest.png"

const Footer = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.contacts_info}>
        <p className={s.contacts_info_text}>3rd Floor, Santa Monica Beach, CA, San Francisco</p>
        <div className={s.contacts_phone_and_number}>
          <a href="number">(359) 0 123 456 789</a>
          <p> - </p>
          <a href="email">info@yourmail.com</a>
        </div>
        <div className={s.social_media}>
          <a href="http://facebook.com">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="http://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="http://pinterest.com">
            <img src={pinterest} alt="pinterest" />
          </a>
        </div>
      </div>

      <div className={s.reserved}>
        <p>Copyright 2016 - All Rights Reserved - Designed by JD</p>
      </div>
    </section>
  )
}

export default Footer