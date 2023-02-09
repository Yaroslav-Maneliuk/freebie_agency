import React from 'react'
import s from "./OurTeam.module.css"
import person1 from "../../../assets/images/person_1.png"
import person2 from "../../../assets/images/person_2.png"
import person3 from "../../../assets/images/person_3.png"

const OurTeam = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.team_module}>
        <h2 className={s.team_title}>
          the team
        </h2>
        <div className={s.person_container_wrapper}>
          <div className={s.person_container} >
            <img src={person1} alt="person1" className={s.person_container_image} />
            <div className={s.person_container_overlay}>
              <div className={s.person_container_text}>
                <p className={s.person_container_text__name}>tom jones</p>
                <p className={s.person_container_text__position}>creative director</p>
                <p className={s.person_container_text__phrase}>Create with simplicity in mind!</p>
              </div>
            </div>
          </div >
          <div className={s.person_container} >
            <img src={person2} alt="person2" className={s.person_container_image} />
            <div className={s.person_container_overlay}>
              <div className={s.person_container_text}>
                <p className={s.person_container_text__name}>michael fraup</p>
                <p className={s.person_container_text__position}>creative director</p>
                <p className={s.person_container_text__phrase}>Create with simplicity in mind!</p>
              </div>
            </div>
          </div >
          <div className={s.person_container} >
            <img src={person3} alt="person3" className={s.person_container_image} />
            <div className={s.person_container_overlay}>
              <div className={s.person_container_text}>
                <p className={s.person_container_text__name}>tim cahill</p>
                <p className={s.person_container_text__position}>creative director</p>
                <p className={s.person_container_text__phrase}>Create with simplicity in mind!</p>
              </div>
            </div>
          </div >
        </div>

      </div>
    </section>
  )
}

export default OurTeam




      //  <div className={s.person_container_wrapper}>
      //     <div>
      //       <img src={person1} alt="person1" className={s.person_image} />
      //       <div className={s.person_preview}> <p>tom jones</p> </div>
      //     </div>
      //     <div><img src={person2} alt="person2" className={s.person_image} /></div>
      //     <div><img src={person3} alt="person3" className={s.person_image} /></div>

      //   </div>