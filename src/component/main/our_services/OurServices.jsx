import React from 'react'
import s from "./OurServices.module.css"
import branding from "../../../assets/images/branding.svg"
import design from "../../../assets/images/design.svg"
import development from "../../../assets/images/development.svg"

const OurServices = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.services_module}>
        <h2 className={s.services_title}>
          our services
        </h2>

        <div className={s.services_container_wrapper}>
          <div className={s.services_container}>
            <div className={s.title_wrapper}>
              <h3 className={s.services_container_title}>branding</h3>
              <div className={s.circle}>
                <img src={branding} alt="branding" className={s.circle_img}/>
              </div>
            </div>
            <p className={s.services_container_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <button className={s.services_container_button}>read more</button>
          </div>

          <div className={s.services_container}>
            <div className={s.title_wrapper}>
              <h3 className={s.services_container_title}>design</h3>
              <div className={s.circle}>
                <img src={design} alt="design" className={s.circle_img}/>
              </div>
            </div>
            <p className={s.services_container_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <button className={s.services_container_button}>read more</button>
          </div>

          <div className={s.services_container}>
            <div className={s.title_wrapper}>
              <h3 className={s.services_container_title}>development</h3>
              <div className={s.circle}>
                <img src={development} alt="development" className={s.circle_img}/>
              </div>
            </div>
            <p className={s.services_container_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <button className={s.services_container_button}>read more</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default OurServices