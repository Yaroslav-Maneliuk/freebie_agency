import React from 'react'
import s from "./Introduction.module.css"
import intro1 from "../../../assets/images/introduction_1.png"
import intro2 from "../../../assets/images/introduction_2.png"

const Introduction = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.introduction_module}>
        <div className={s.introduction_module_left}>
          <h2 className={s.introduction_subtitle}>we are</h2>
          <h2 className={s.introduction_title}>the sqwd</h2>
          <p className={s.introduction_module_left_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className={s.introduction_module_right}>
          <p className={s.introduction_module_right_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <img src={intro1} alt="person1" className={s.introduction_module_person_1} />
        <div className={s.introduction_module_rectangle} ></div>
        <img src={intro2} alt="person2" className={s.introduction_module_person_2} />

      </div>
    </section>
  )
}

export default Introduction