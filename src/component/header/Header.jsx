import React from 'react'
import s from "./Header.module.css"

const Header = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.nav_bar}>
        <p className={`${s.logo} ${s.uppercase}`}>sqwd</p>
        <nav className={`${s.nav_bar__list}`}>
          <ul className={`${s.nav_bar_item_wrapper}`}>
            <li><a className={`${s.nav_bar__item} ${s.uppercase}`} href="#works">works</a></li>
            <li><a className={`${s.nav_bar__item} ${s.uppercase}`} href="#about">about</a></li>
            <li><a className={`${s.nav_bar__item} ${s.uppercase}`} href="#services">services</a></li>
            <li><a className={`${s.nav_bar__item} ${s.uppercase}`} href="#blog">blog</a></li>
            <li><a className={`${s.nav_bar__item} ${s.uppercase}`} href="#contact">contact</a></li>
          </ul>
        </nav>
      </div>
      <div className={s.title_wrapper} >
        <p className={`${s.title} ${s.uppercase}`}>where great ideas come to life</p>
        <p className={s.subtitle}>Passionate creative studio helping startups grow their business!</p>
      </div>
      <div className={s.clock}>CLOCK WILL BE</div>
    </section>
  )
}

export default Header