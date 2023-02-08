import React from 'react'
import s from "./Conaction.module.css"
import bag from "../../../assets/images/case.png"
import message from "../../../assets/images/message.png"

const Conaction = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.left_box}>
        <img src={bag} alt="bag" />
        <p className={s.left_title}>Want to work together?</p>
        <p className={s.left_subtitle}>Amazing. Tell us about your project!</p>
      </div>
      <div className={s.right_box}>
        <img src={message} alt="message" />
        <p className={s.right_title}>Contact us</p>
        <p className={s.right_subtitle}>Get in touch</p>
      </div>
    </section>
  )
}

export default Conaction